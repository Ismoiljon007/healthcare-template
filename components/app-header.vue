<template>
  <header class="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between py-4">
      <div class="flex items-center gap-2">
        <Icon name="lucide:briefcase" class="h-6 w-6 text-primary" />
        <span class="text-xl font-bold">MedStaff Solutions</span>
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink to="/" class="text-sm font-medium">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="text-sm font-medium">
          About Us
        </NuxtLink>
        <NuxtLink to="/services" class="text-sm font-medium">
          Services
        </NuxtLink>
        <NuxtLink to="/for-nurses" class="text-sm font-medium">
          For Nurses
        </NuxtLink>
        <NuxtLink to="/for-employers" class="text-sm font-medium">
          For Employers
        </NuxtLink>
        <NuxtLink to="/blog" class="text-sm font-medium">
          Blog & Resources
        </NuxtLink>
        <NuxtLink to="/contact" class="text-sm font-medium">
          Contact
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-4">
        <NuxtLink to="/login" class="hidden md:inline-flex">
          <UiButton variant="outline">Log In</UiButton>
        </NuxtLink>
        <NuxtLink to="/contact" class="hidden md:inline-flex">
          <UiButton>Get Started</UiButton>
        </NuxtLink>
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
          <Icon v-if="!isMenuOpen" name="lucide:menu" class="h-6 w-6" />
          <Icon v-else name="lucide:x" class="h-6 w-6" />
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="container py-4 px-4 space-y-4 bg-background border-t">
        <NuxtLink to="/" class="block py-2 text-sm font-medium">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="block py-2 text-sm font-medium">
          About Us
        </NuxtLink>
        <NuxtLink to="/services" class="block py-2 text-sm font-medium">
          Services
        </NuxtLink>
        <NuxtLink to="/for-nurses" class="block py-2 text-sm font-medium">
          For Nurses
        </NuxtLink>
        <NuxtLink to="/for-employers" class="block py-2 text-sm font-medium">
          For Employers
        </NuxtLink>
        <NuxtLink to="/blog" class="block py-2 text-sm font-medium">
          Blog & Resources
        </NuxtLink>
        <NuxtLink to="/contact" class="block py-2 text-sm font-medium">
          Contact
        </NuxtLink>
        <div class="flex flex-col gap-2 pt-2">
          <NuxtLink to="/login">
            <UiButton variant="outline" class="w-full">Log In</UiButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <UiButton class="w-full">Get Started</UiButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  isMenuOpen.value = false
})
</script>

