<script setup lang="ts"></script>

<template>
  <PageWrapper>
    <PageContent>
      <div class="flex h-full flex-col gap-6 text-sm">
        <div class="flex flex-col">
          <p class="mb-2">you clicked it, you got it. here's some more:</p>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="leading-none font-bold">fun facts</h3>
          <div class="ml-3">
            <p>- i'm <MoreCurrentAge /> years old</p>
            <!-- <p>
              - i was a
              <a
                href="https://developer.apple.com/swift-student-challenge/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-secondary font-medium underline underline-offset-2"
              >
                swift student challenge
              </a>
              winner in 2022
            </p> -->
            <p>- i never attended any university</p>
            <!-- <p>- i'm pretty good at rudimental drumming</p> -->
            <p>- i'm an avid listener of electronic music</p>
            <!-- <p>- in case you see me and feel the need to ask, i'm 6'7"</p> -->
          </div>
        </div>

      </div>
    </PageContent>
  </PageWrapper>
</template>
