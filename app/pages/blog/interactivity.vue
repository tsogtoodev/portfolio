<script setup lang="ts">
import BlogLink from "~/components/blog/ui/Link.vue";
</script>

<template>
  <BlogWrapper>
    <BlogContent>
      <div>
        <header class="mt-8 text-2xl font-bold">Digital is physical.</header>
        <p class="text-secondary text-base">01/24/25</p>
      </div>
      <p>
        The best digital interactions more often than not mimic real-world
        interactions, whether or not we realize.
        <BlogLink href="https://rauno.me/craft/interaction-design">
          Rauno has a great article
        </BlogLink>
        that dives into this idea in more detail, mostly with touch-devices.
        However, this idea is not restricted to touch-only interactions.
        Computers have their own <BlogLink href="#">handles</BlogLink> too -
        being the mouse and keyboard. The way the user utilizes the mouse and
        keyboard directly follows what they expect the computer interface to do.
      </p>
      <p>
        A lot of this can be boiled down to the concept of
        <BlogLink href="#">affordances</BlogLink> - a possible action from the
        relation between a user and an object. The simplest example of this is a
        door handle: the handle <i>affords</i> you the ability to open the door
        with your hand. A touch-screen (in most cases) <i>affords</i> you the
        ability to scroll the content with your finger.
      </p>
      <h4 class="font-medium">
        But how does this apply to interaction design on the web, when we only
        have a cursor and keyboard to work with?
      </h4>
      <h3 class="mt-4 text-lg font-medium">State of interactivity</h3>
      <p>
        We can assume that any element presented to the user is able to be
        interacted with, or not. If it can be interacted with, we must create an
        affordance that conveys that to the user.
      </p>
      <p>
        We can create affordances by utilizing a very popular handle: the
        cursor. Using the cursor is akin to using your eye(s) - you use it to
        look around and gather information about the current environment. The
        cursor is used to infer what can and cannot be interacted with,
        depending on how we treat it.
      </p>
      <p>
        Another important thing we must remember: design should be intuitive.
        Logical reasoning is human nature, and a user interface should aim to
        create that pattern everywhere. Imagine a world where you know nothing
        about computers (but have a basic understanding of how to use the mouse
        and keyboard), and look at the example below. Which element are you more
        inclined to click, out of pure intuition?
      </p>
      <div class="my-2 grid w-full grid-cols-2 gap-4 overflow-clip">
        <button
          class="mx-auto w-min rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-700"
        >
          Continue
        </button>
        <button
          class="mx-auto w-min cursor-pointer rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-700"
        >
          Continue
        </button>
      </div>
      <p>
        If you answered the right one, congratulations! You saw that the cursor
        changed when we hovered over it, versus the other one that had no
        change.
      </p>
      <div
        class="border-tertiary text-primary/75 mt-4 rounded-r-lg border-l-4 bg-gray-50 px-4 py-3 text-sm leading-5.5"
      >
        We achieve this by using
        <code
          class="rounded-sm bg-gray-200 px-1 py-0.25 whitespace-nowrap text-gray-700"
        >
          cursor: pointer
        </code>
        to transform the cursor into the handy little icon that everybody knows
        as the "click" icon. Helpful!
      </div>
      <p>
        We've created an affordance by having the cursor react to the
        environment, but we can make this affordance even clearer by allowing
        the environment to react to the cursor as well. In the updated example
        below, which half are you most likely to click?
      </p>
      <div class="my-2 grid w-full grid-cols-2 gap-4">
        <button
          class="mx-auto w-min cursor-pointer rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-700 transition-all duration-200 ease-out hover:bg-gray-100"
        >
          Continue
        </button>

        <button
          class="mx-auto w-min rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-700"
        >
          Continue
        </button>
      </div>
      <p>
        You guessed it: the left half. We've just made the element interact with
        the cursor without the user even having to click. This is good, because
        that signals to the user that further interaction is possible, and even
        encouraged.
      </p>
      <p>
        We can use these same concepts to convey a <i>lack</i> of affordances to
        the user, letting them know they <i>can't</i> interact with a certain
        element.
      </p>
      <div class="my-2 grid w-full grid-cols-2 gap-4">
        <button
          class="mx-auto w-min cursor-not-allowed rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-400"
        >
          Continue
        </button>

        <button
          class="mx-auto w-min cursor-pointer rounded-full border border-gray-100 bg-gray-50 px-3 pt-0.5 whitespace-nowrap text-gray-700 transition-all duration-200 ease-out hover:bg-gray-100"
        >
          Continue
        </button>
      </div>
      <h3 class="mt-4 text-lg font-medium">Implied interactivity</h3>
      <p>
        Ok, so now we know how we can create affordances between the cursor and
        the content, letting the user know that they can (or cannot) interact
        with elements.
        <b class="font-medium">But that's not very helpful.</b> These simple
        affordances don't actually provide any context about <i>how</i> the
        element can be interacted with, nor does it imply what the element
        actually does.
      </p>
      <p>Assume there is a button</p>
      ... ... ...
      <p>todo: slider, mimics physical world, make it custom w framer motion</p>
      <p>
        Now, this is where it gets a little tricky. How would you expect to
        interact with a knob?
      </p>
      <div class="flex w-full items-center justify-center">
        <div class="size-12 rounded-full bg-gray-500" />
      </div>
      <p>
        You aren't able to use your whole hand to turn it like you would in the
        real world. You might try to grab the edge of the knob and drag your
        cursor in a circle to turn it, but this is cumbersome and requires more
        precision than is necessary.
      </p>
      <p>
        What does a knob really do? It allows you to select a value from a range
        minimum and maximum. Sliders do this exact same thing.
      </p>
    </BlogContent>
  </BlogWrapper>
</template>
