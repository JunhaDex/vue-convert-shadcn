<template>
  <main>
    <h1 class="text-xl">Foo</h1>
    <Button size="sm" variant="secondary" disabled>Medium</Button>
    <Button size="lg" @click="handleClick">Large</Button>
  </main>
</template>
<script setup lang="ts">
import { Button } from '@/components/ui/button.ts'

function handleClick() {
  console.log('Button clicked!')
}
</script>
