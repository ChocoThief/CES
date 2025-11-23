<template>
  <div class="flex min-h-screen items-center justify-center bg-muted/30">
    <div class="w-full max-w-md px-4">
      <div class="space-y-8">
        <!-- Header -->
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold tracking-tight">CES 2026</h1>
          <p class="text-sm text-muted-foreground">관리자 계정으로 로그인하세요</p>
        </div>

        <!-- Login Form -->
        <Card class="border-0 bg-card">
          <CardContent class="pt-6">
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="space-y-2">
                <Label for="username">아이디</Label>
                <Input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  placeholder="아이디를 입력하세요"
                  class="h-11"
                />
              </div>
              <div class="space-y-2">
                <Label for="password">비밀번호</Label>
                <Input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  placeholder="비밀번호를 입력하세요"
                  class="h-11"
                />
              </div>
              <Button type="submit" class="w-full h-11" :disabled="loading">
                {{ loading ? '로그인 중...' : '로그인' }}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { toast } from 'vue-sonner';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const router = useRouter();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;

  try {
    await authStore.login(username.value, password.value);
    toast.success('로그인 성공!', { duration: 2000 });
    setTimeout(() => {
      router.push('/');
    }, 500);
  } catch (err) {
    loading.value = false;
    const errorMessage = err.response?.data?.error || '로그인에 실패했습니다.';
    console.log('Login error toast:', errorMessage);
    toast.error(errorMessage, {
      duration: 5000,
      important: true
    });
  }
};
</script>
