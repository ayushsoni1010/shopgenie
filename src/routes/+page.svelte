<script>
  import Header from '$lib/components/Header.svelte'
  // import Product from "$lib/components/Products.svelte";

  import { useEffect } from '../lib/alanai_hook'

  useEffect(() => {
    alanBtn({
      key:
        '224341b569f9a39f1d0a13a158e29c4b2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      },
    })
  }, [])
  import Products from '$lib/components/Products.svelte'
  import Features from '../lib/components/Features.svelte'
</script>

<div
  class="bg-gradient-to-r from-gray-500 via-gray-900 to-black h-screen px-20">
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
<div class="p-[50px] flex bg-gray-900">
  <Products />
  <Products />
  <Products />
</div>
<footer class=" flex-row bg-slate-950 p-[100px] grid grid-cols-4 text-white">
  <div class="flex flex-col space-y-4 ">
    <div class="flex flex-row items-center">
      <img src="images/logo.png" alt="logo" class="h-[50px] w-[70px]" />
      <span class="text-white ml-3">Shop Genie</span>
    </div>
    <p class="text-white">
      Made by
      <br />
      The Disruptors
    </p>
  </div>

  <div class="flex flex-col ml-25px">
    <div>
      <h3 class="font-bold mb-2 text-[18px]">Product</h3>
    </div>
    <div>
      <a href="/">Visit store</a>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-bold mb-2 text-[18px]">Contacts</h3>
    <div class="space-y-2 flex flex-col">
      <a href="/">Github</a>
      <a href="/">Linkedin</a>
      <a href="/">Twitter</a>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-bold mb-2 text-[18px]">Company</h3>
    <div class="space-y-2 flex flex-col">
      <a href="/">About</a>
      <a href="/">Terms of Services</a>
      <a href="/">Privacy Policy</a>
    </div>
  </div>

</footer>
