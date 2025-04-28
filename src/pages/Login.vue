<template>
  <main class="login-container">
    <div class="flex min-h-screen items-center justify-center flex-col">
      <h1 class="login-label text-2xl font-bold">Login</h1>
      <Card class-name="login-box">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div>somewhat</div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  </main>
  <footer class="py-4 text-center text-gray-500 text-sm">
    © 2025 Company Name. All rights reserved.
  </footer>
</template>
<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card.ts'
import { Button } from '@/components/ui/button.ts'
</script>
<style scoped>
.login-container {
  min-height: 100vh;
  position: relative;
}

.login-label {
  width: 100%;
  padding: 0 1rem;
  max-width: 448px;
}

.login-box {
  animation: slide-up 0.5s ease-out;
  margin: 1rem;
  width: calc(100% - 2rem);
  max-width: 448px;
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
