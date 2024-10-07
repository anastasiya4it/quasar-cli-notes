<template>
  <q-card class="cursor-pointer q-mb-sm text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
    <q-card-section>
      <div class="text-h5 withTruncation">{{ props.title }}</div>
      <div class="text-subtitle2 text-weight-thin text-italic withTruncation" color="grey">
        {{ props.description }}
      </div>
      <q-separator />
      <div class="text-subtitle2 content" color="grey" v-html="props.content">
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue';

  const props = defineProps({
    title: String,
    description: String,
    content: String,
  });
</script>

<style lang="scss" scoped>
.withTruncation {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.content{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

