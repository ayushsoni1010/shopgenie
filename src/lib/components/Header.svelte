<script>
  export const ssr = false;
  let navbarDetails = [
    {
      item: "Home",
      url: "/",
    },
    {
      item: "About",
      url: "/about",
    },
    {
      item: "Products",
      url: "/products",
    },
    {
      item: "Collections",
      url: "/collections",
    },
    {
      item: "Contact",
      url: "/contact",
    },
  ];
</script>

<div>
  <header>
    <div class="flex items-center py-4 justify-between">
      <a href="/" class="">
        <div class="flex items-center">
          <img src="/images/logo.png" alt="Logo" class="w-10" srcset="" />
          <p class="text-lg text-white ml-2 font-medium">Shop Genie</p>
        </div>
      </a>
      <div class="flex items-center list-none text-white">
        {#each navbarDetails as { item, url }, i}
          <li class="hover:bg-gray-700 px-4 py-2 rounded-md drop-shadow">
            <a target="_blank" href={url} rel="noreferrer">
              {item}
            </a>
          </li>
        {/each}
      </div>
      <div class="flex items-center gap-2">
        <a
          href="/login"
          class="px-4 py-2 border-2 border-gray-100 rounded-md text-white"
          >Login</a
        >
        <a href="/signup" class="px-4 py-2 bg- bg-gray-100 rounded-md">Signup</a
        >
      </div>
    </div>
  </header>
</div>
