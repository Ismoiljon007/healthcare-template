<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <UiCard
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="w-full flex-shrink-0 border-none shadow-none"
        >
          <UiCardContent class="p-6 flex flex-col items-center text-center">
            <div class="mb-6">
              <Icon name="lucide:quote" class="h-12 w-12 text-primary/20" />
            </div>
            <p class="text-lg mb-6 max-w-3xl mx-auto">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex flex-col items-center">
              <div class="relative h-16 w-16 rounded-full overflow-hidden mb-4">
                <img
                  :src="testimonial.image || '/placeholder.svg'"
                  :alt="testimonial.name"
                  class="object-cover w-full h-full"
                />
              </div>
              <div>
                <h4 class="font-bold">{{ testimonial.name }}</h4>
                <p class="text-sm text-muted-foreground">
                  {{ testimonial.role }}, {{ testimonial.organization }}
                </p>
                <div class="mt-2">
                  <span
                    class="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {{
                      testimonial.type === "nurse"
                        ? "Healthcare Professional"
                        : "Healthcare Facility"
                    }}
                  </span>
                </div>
              </div>
            </div>
          </UiCardContent>
        </UiCard>
      </div>
    </div>
    <div class="flex justify-center mt-6 gap-2">
      <UiButton
        variant="outline"
        size="icon"
        class="rounded-full"
        @click="prevTestimonial"
        @mouseenter="setAutoplay(false)"
        @mouseleave="setAutoplay(true)"
      >
        <Icon name="lucide:chevron-left" class="h-4 w-4" />
        <span class="sr-only">Previous testimonial</span>
      </UiButton>
      <UiButton
        variant="outline"
        size="icon"
        class="rounded-full"
        @click="nextTestimonial"
        @mouseenter="setAutoplay(false)"
        @mouseleave="setAutoplay(true)"
      >
        <Icon name="lucide:chevron-right" class="h-4 w-4" />
        <span class="sr-only">Next testimonial</span>
      </UiButton>
    </div>
    <div class="flex justify-center mt-4 gap-2">
      <button
        v-for="(_, index) in testimonials"
        :key="index"
        :class="`h-2 w-2 rounded-full ${
          index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
        }`"
        @click="setCurrentIndex(index)"
        @mouseenter="setAutoplay(false)"
        @mouseleave="setAutoplay(true)"
        :aria-label="`Go to testimonial ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
const currentIndex = ref(0);
const autoplay = ref(true);

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson, RN",
    role: "Travel Nurse",
    organization: "Various Hospitals",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "MedStaff Solutions has transformed my nursing career. Their team found me opportunities that perfectly match my skills and lifestyle preferences. The support throughout my assignments has been exceptional.",
    type: "nurse",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "HR Director",
    organization: "Memorial Hospital",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "We've partnered with MedStaff Solutions for over 5 years, and they consistently provide qualified professionals who integrate seamlessly with our team. Their responsiveness to our staffing needs is unmatched.",
    type: "facility",
  },
  {
    id: 3,
    name: "Jessica Martinez, BSN",
    role: "ICU Nurse",
    organization: "City Medical Center",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      "The flexibility of per diem work through MedStaff Solutions allows me to maintain work-life balance while advancing my career. Their app makes scheduling shifts incredibly convenient.",
    type: "nurse",
  },
  {
    id: 4,
    name: "Robert Wilson",
    role: "Chief Nursing Officer",
    organization: "Lakeside Healthcare",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "During critical staffing shortages, MedStaff Solutions delivered qualified nurses within 24 hours. Their understanding of our facility's culture ensures we receive professionals who are not just skilled, but also the right fit.",
    type: "facility",
  },
];

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const setCurrentIndex = (index) => {
  currentIndex.value = index;
};

const setAutoplay = (value) => {
  autoplay.value = value;
};

// Autoplay functionality
let interval = null;

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

watch(autoplay, (newValue) => {
  if (newValue) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
});

function startAutoplay() {
  stopAutoplay();
  interval = setInterval(() => {
    if (autoplay.value) {
      nextTestimonial();
    }
  }, 5000);
}

function stopAutoplay() {
  if (interval) {
    clearInterval(interval);
  }
}
</script>
