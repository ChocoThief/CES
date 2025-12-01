<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

interface Props {
    page: number;
    totalPages: number;
    total: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "change", page: number): void;
}>();

const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= props.totalPages) {
        emit("change", newPage);
    }
};
</script>

<template>
    <div
        v-if="totalPages >= 1"
        class="flex items-center justify-center gap-2"
    >
        <Button
            variant="outline"
            size="sm"
            @click="changePage(page - 1)"
            :disabled="page === 1"
        >
            <ChevronLeft :size="16" class="mr-1" />
            이전
        </Button>
        <span class="text-sm text-muted-foreground px-4">
            {{ page }} / {{ totalPages }} (총 {{ total }}개)
        </span>
        <Button
            variant="outline"
            size="sm"
            @click="changePage(page + 1)"
            :disabled="page === totalPages"
        >
            다음
            <ChevronRight :size="16" class="ml-1" />
        </Button>
    </div>
</template>
