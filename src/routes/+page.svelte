<script>
  import Header from '$lib/components/Header.svelte'
  // import Product from "$lib/components/Products.svelte";
  import Products from '$lib/components/Products.svelte'
  import Features from '../lib/components/Features.svelte'
</script>

<div
  class="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen px-20">
  <Header />
  <div class="mt-20 grid grid-cols-2 grid-rows-2">
    <div class="mt-10 flex items-start justify-around flex-col">
      <h1 class="text-5xl text-white leading-tight text-left font-bold">
        Shop till you drop without leaving the comfort of your laptop's top!
      </h1>
      <p class="text-white text-lg pr-3">
        Experience shopping like never before. Our ecommerce store offers
        augmented reality and voice-enabled search, making it accessible to all,
        including our valued disabled customers
      </p>
      <a
        href="/products"
        class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500
        text-white text-lg font-medium p-3 px-6 shadow-sm">
        Explore products
      </a>
    </div>
    <div>
      <video src="/images/animated.mp4" class="rounded-xl" />
    </div>
  </div>
</div>
<Features />
