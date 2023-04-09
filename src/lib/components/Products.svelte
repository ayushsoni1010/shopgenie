<script>
  export let name = 'Sofa Bed'
  export let rating
  export let desc =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quasi delectus, facere officiis laborum odit? Dolor aperiam doloribus error ipsum quis, architecto laudantium. Minus nostrum ipsum dolore nobis suscipit quibusdam repellendus fuga?'
  export let price = 500
  export let img =
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80'
</script>

<div
  class="w-[30%] h-auto border border-black m-auto flex flex-col bg-slate-800">

  <div class="p-5 ">
    <!-- Image section -->
    <div class=" h-60 mb-2 relative">
      <img src={img} alt="" srcset="" class="w-full h-full " />
      <div
        class="absolute w-full h-14 border-black bg-gradient-to-t
        from-[rgba(45,45,45,0.9)] to-[rgba(255,255,255,0)] top-[182px]" />
    </div>

    <!-- Name  -->
    <h2 class="text-2xl relative top-[-50px] text-white left-2">{name}</h2>
    <p class="text-white">{desc}</p>

    <!-- Rating -->
    <div class=" font-extrabold text-6xl flex justify-center mb-2" />
    <h3 class="text-center text-green-700 text-2xl mb-3 font-bold">
      Price: {price}$
    </h3>

  </div>
  <div class="flex">

    <button
      class="w-[100%] text-white p-3 border border-black text-center
      bg-gradient-to-br from-slate-900 to-slate-700">
      Add To Cart
    </button>

    <button
      class="w-[100%] text-white p-3 border border-black text-center
      bg-gradient-to-br from-slate-900 to-slate-700">
      Buy Now⭐⭐⭐
    </button>
  </div>
</div>
