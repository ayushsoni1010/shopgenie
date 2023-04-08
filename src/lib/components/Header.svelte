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
        <div>
          <img src="images/logo.png" alt="Logo" class="" srcset="" />
          <p>Shop Genie</p>
        </div>
      </a>
      <div class="flex items-center list-none gap-3">
        {#each navbarDetails as { item, url }, i}
          <li>
            <a target="_blank" href={url} rel="noreferrer">
              {item}
            </a>
          </li>
        {/each}
      </div>
      <div />
    </div>
  </header>
</div>
