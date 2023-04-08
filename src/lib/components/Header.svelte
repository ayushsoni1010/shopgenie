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
    <div class="flex items-center justify-between">
      <a href="/" class="">
        <div class="flex items-center relative top-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            class="w-24 rounded-full"
            srcset=""
          />
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
        <!-- <a
          href="/new"
          class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="mr-2"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New
        </a> -->
      </div>
    </div>
  </header>
</div>
