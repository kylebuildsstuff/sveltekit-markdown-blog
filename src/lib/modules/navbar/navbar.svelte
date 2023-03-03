<script lang="ts">
  import NavbarDesktop from './desktop/navbar-desktop.svelte';
  import NavbarMobile from './mobile/navbar-mobile.svelte';
</script>

<nav
  id="header"
  class="w-full bg-gray-800"
>
  <NavbarDesktop />

  <NavbarMobile />
</nav>
