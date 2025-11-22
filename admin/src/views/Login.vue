<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
    <Card class="w-full max-w-md shadow-2xl">
      <CardHeader>
        <CardTitle class="text-center text-2xl">CES 2026 관리자 로그인</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-2">
            <Label for="username">아이디</Label>
            <Input
              id="username"
              v-model="username"
              type="text"
              required
              placeholder="아이디 입력"
            />
          </div>
          <div class="space-y-2">
            <Label for="password">비밀번호</Label>
            <Input
              id="password"
              v-model="password"
              type="password"
              required
              placeholder="비밀번호 입력"
            />
          </div>
          <Button type="submit" class="w-full" :disabled="loading">
            {{ loading ? '로그인 중...' : '로그인' }}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { toast } from 'vue-sonner';
import Card from '../components/ui/Card.vue';
import CardHeader from '../components/ui/CardHeader.vue';
import CardTitle from '../components/ui/CardTitle.vue';
import CardContent from '../components/ui/CardContent.vue';
import Input from '../components/ui/Input.vue';
import Label from '../components/ui/Label.vue';
import Button from '../components/ui/Button.vue';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;

  try {
    await authStore.login(username.value, password.value);
    toast.success('로그인 성공!');
    router.push('/');
  } catch (err) {
    const errorMessage = err.response?.data?.error || '로그인에 실패했습니다.';
    toast.error(errorMessage);
  } finally {
    loading.value = false;
  }
};
</script>
