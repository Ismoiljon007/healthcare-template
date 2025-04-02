<template>
  <main class="flex-1">
    <!-- Hero Section -->
    <section
      class="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div class="container px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter"
              >
                Connecting Healthcare Heroes with Opportunities
              </h1>
              <p
                class="max-w-[600px] text-base sm:text-lg md:text-xl text-muted-foreground"
              >
                Trusted staffing solutions for healthcare facilities and nursing
                professionals nationwide.
              </p>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <NuxtLink to="/for-nurses" class="w-full sm:w-auto">
                <UiButton size="lg" class="w-full text-sm sm:text-base">
                  Find Your Next Nursing Opportunity
                </UiButton>
              </NuxtLink>
              <NuxtLink to="/for-employers" class="w-full sm:w-auto">
                <UiButton
                  size="lg"
                  variant="outline"
                  class="w-full text-sm sm:text-base"
                >
                  Request Staffing
                </UiButton>
              </NuxtLink>
            </div>
          </div>
          <div class="flex justify-center mt-6 lg:mt-0">
            <img
              src="@/assets/images/labor-union-members-working-together.jpg"
              alt="Healthcare professionals smiling"
              class="rounded-lg object-cover w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="w-full py-8 sm:py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6">
        <div
          class="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div class="space-y-2">
            <h2
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter"
            >
              Comprehensive Staffing Solutions
            </h2>
            <p
              class="max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground"
            >
              Tailored healthcare staffing services to meet your unique needs
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          <UiCard class="flex flex-col h-full">
            <UiCardContent
              class="flex flex-col items-center text-center p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1"
            >
              <div class="p-2 bg-primary/10 rounded-full">
                <Icon
                  name="lucide:calendar"
                  class="h-8 w-8 sm:h-10 sm:w-10 text-primary"
                />
              </div>
              <h3 class="text-lg sm:text-xl font-bold">
                Short & Long-Term Staffing
              </h3>
              <p class="text-sm sm:text-base text-muted-foreground">
                Flexible staffing solutions to cover short-term needs or
                long-term positions with qualified healthcare professionals.
              </p>
              <NuxtLink
                to="/services"
                class="mt-auto inline-flex items-center text-primary"
              >
                Learn more
                <Icon name="lucide:chevron-right" class="ml-1 h-4 w-4" />
              </NuxtLink>
            </UiCardContent>
          </UiCard>
          <UiCard class="flex flex-col h-full">
            <UiCardContent
              class="flex flex-col items-center text-center p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1"
            >
              <div class="p-2 bg-primary/10 rounded-full">
                <Icon
                  name="lucide:map-pin"
                  class="h-8 w-8 sm:h-10 sm:w-10 text-primary"
                />
              </div>
              <h3 class="text-lg sm:text-xl font-bold">
                Travel Nursing Opportunities
              </h3>
              <p class="text-sm sm:text-base text-muted-foreground">
                Nationwide placements with competitive pay, comprehensive
                benefits, and personalized support for travel logistics.
              </p>
              <NuxtLink
                to="/services"
                class="mt-auto inline-flex items-center text-primary"
              >
                Learn more
                <Icon name="lucide:chevron-right" class="ml-1 h-4 w-4" />
              </NuxtLink>
            </UiCardContent>
          </UiCard>
          <UiCard class="flex flex-col h-full sm:col-span-2 lg:col-span-1">
            <UiCardContent
              class="flex flex-col items-center text-center p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1"
            >
              <div class="p-2 bg-primary/10 rounded-full">
                <Icon
                  name="lucide:briefcase"
                  class="h-8 w-8 sm:h-10 sm:w-10 text-primary"
                />
              </div>
              <h3 class="text-lg sm:text-xl font-bold">
                Per Diem & Contract Positions
              </h3>
              <p class="text-sm sm:text-base text-muted-foreground">
                Flexible scheduling options that match nurses' preferences with
                an easy-to-use online portal and mobile app.
              </p>
              <NuxtLink
                to="/services"
                class="mt-auto inline-flex items-center text-primary"
              >
                Learn more
                <Icon name="lucide:chevron-right" class="ml-1 h-4 w-4" />
              </NuxtLink>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-muted">
      <div class="container px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div class="flex justify-center order-2 lg:order-1">
            <img
              src="@/assets/images/close-up-scientist-with-coats.jpg"
              alt="Nurse and patient"
              class="rounded-lg object-cover w-full max-w-[400px] sm:max-w-[500px] aspect-[3/2] md:max-w-[600px] h-auto"
            />
          </div>
          <div
            class="flex flex-col justify-center space-y-4 order-1 lg:order-2"
          >
            <div class="space-y-2">
              <h2
                class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter"
              >
                Why Healthcare Facilities Trust Us
              </h2>
              <p
                class="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground"
              >
                We're committed to providing exceptional staffing solutions that
                prioritize quality care and professional satisfaction.
              </p>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-2">
                <Icon
                  name="lucide:star"
                  class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 class="text-base sm:text-lg font-bold">
                    Rigorous Screening Process
                  </h3>
                  <p class="text-sm sm:text-base text-muted-foreground">
                    All our healthcare professionals undergo thorough background
                    checks and credential verification.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="lucide:star"
                  class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 class="text-base sm:text-lg font-bold">
                    Rapid Response Times
                  </h3>
                  <p class="text-sm sm:text-base text-muted-foreground">
                    Our dedicated team ensures quick placements to meet urgent
                    staffing needs.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="lucide:star"
                  class="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 class="text-base sm:text-lg font-bold">
                    Personalized Service
                  </h3>
                  <p class="text-sm sm:text-base text-muted-foreground">
                    We take the time to understand your facility's unique
                    culture and requirements.
                  </p>
                </div>
              </li>
            </ul>
            <div class="pt-2">
              <NuxtLink to="/about">
                <UiButton
                  size="lg"
                  class="w-full sm:w-auto text-sm sm:text-base"
                  >Learn More About Us</UiButton
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6">
        <div
          class="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div class="space-y-2">
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              What Our Partners Say
            </h2>
            <p class="max-w-[700px] text-muted-foreground md:text-xl">
              Hear from healthcare professionals and facilities who have
              experienced our services
            </p>
          </div>
        </div>
        <div class="mt-12">
          <TestimonialSlider />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
    >
      <div class="container px-4 md:px-6">
        <div
          class="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div class="space-y-2">
            <h2
              class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter"
            >
              Ready to Find Your Perfect Match?
            </h2>
            <p class="max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl">
              Whether you're a healthcare facility seeking qualified staff or a
              nursing professional looking for your next opportunity, we're here
              to help.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <NuxtLink to="/for-nurses" class="w-full sm:w-auto">
              <UiButton
                size="lg"
                variant="secondary"
                class="w-full text-sm sm:text-base"
              >
                For Nurses
              </UiButton>
            </NuxtLink>
            <NuxtLink to="/for-employers" class="w-full sm:w-auto">
              <UiButton
                size="lg"
                variant="outline"
                class="w-full text-sm sm:text-base bg-transparent border-white hover:bg-white hover:text-primary"
              >
                For Employers
              </UiButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Home page component
</script>
