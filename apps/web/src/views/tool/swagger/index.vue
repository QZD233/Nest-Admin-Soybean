<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'SwaggerPage'
});

// 获取 Swagger UI 地址
const swaggerUrl = computed(() => {
  const baseUrl = import.meta.env.VITE_SERVICE_BASE_URL || '';
  const normalizedBaseUrl = baseUrl.endsWith('/v1') ? baseUrl.slice(0, -3) : baseUrl;
  return `${normalizedBaseUrl}/swagger-ui`;
});
</script>

<template>
  <div class="h-full">
    <iframe id="swagger-frame" class="size-full border-none" :src="swaggerUrl" title="Swagger API Documentation" />
  </div>
</template>

<style scoped>
.h-full {
  height: 100%;
}

.size-full {
  width: 100%;
  height: 100%;
}

.border-none {
  border: none;
}
</style>
