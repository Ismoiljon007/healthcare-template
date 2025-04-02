<template>
  <footer class="border-t bg-muted">
    <div class="container px-4 py-12 md:px-6">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <Icon name="lucide:briefcase" class="h-6 w-6 text-primary" />
            <span class="text-xl font-bold">MedStaff Solutions</span>
          </div>
          <p class="text-sm text-muted-foreground">
            Connecting healthcare professionals with opportunities that matter since 2005.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:facebook" class="h-5 w-5" />
              <span class="sr-only">Facebook</span>
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:twitter" class="h-5 w-5" />
              <span class="sr-only">Twitter</span>
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground">
              <Icon name="lucide:linkedin" class="h-5 w-5" />
              <span class="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Company</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-foreground">
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-foreground">
                  Our Team
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Services</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/services" class="text-sm text-muted-foreground hover:text-foreground">
                  Staffing Solutions
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-sm text-muted-foreground hover:text-foreground">
                  Travel Nursing
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-sm text-muted-foreground hover:text-foreground">
                  Per Diem
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-sm text-muted-foreground hover:text-foreground">
                  Contract Positions
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Resources</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/blog" class="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-sm text-muted-foreground hover:text-foreground">
                  Guides
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-sm text-muted-foreground hover:text-foreground">
                  Industry Updates
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-sm text-muted-foreground hover:text-foreground">
                  FAQs
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t pt-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p class="text-sm text-muted-foreground">
            © {{ new Date().getFullYear() }} MedStaff Solutions. All rights reserved.
          </p>
          <div class="flex gap-4">
            <NuxtLink to="/privacy" class="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </NuxtLink>
            <NuxtLink to="/accessibility" class="text-sm text-muted-foreground hover:text-foreground">
              Accessibility
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

