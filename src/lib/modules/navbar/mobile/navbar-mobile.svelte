<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Popover, PopoverButton } from '@rgossiaux/svelte-headlessui';
  import { goto } from '$app/navigation';

  import XMarkIcon from '$lib/shared/icons/x-mark-icon.svelte';
  import Bars3Icon from '$lib/shared/icons/bars-3-icon.svelte';
  import NavbarMobilePanel from './navbar-mobile-panel.svelte';
</script>

<Popover let:open>
  <div class="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <!-- Logo -->
      <button
        on:click={() => {
          goto('/');
        }}
        class="flex items-center"
      >
        <div class="flex justify-center items-center gap-2 flex-shrink-0">
          <span class="text-2xl font-bold text-white mt-2.5"> Sveltekit </span>
          <a href="/" class="mt-2.5">
            <span class="text-2xl font-bold text-white opacity-50 hover:opacity-100">
              blog
            </span>
          </a>
        </div>
      </button>

      <!-- Mobile menu button -->
      <div class="-mr-2 mt-2.5 flex md:hidden">
        <PopoverButton
          aria-label="Toggle profile dropdown"
          class="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-400 focus:outline-none"
        >
          {#if open}
            <span class="sr-only">Open main menu</span>
            <XMarkIcon />
          {:else}
            <span class="sr-only">Open main menu</span>
            <Bars3Icon />
          {/if}
        </PopoverButton>
      </div>
    </div>
  </div>

  {#if open}
    <div transition:fade>
      <NavbarMobilePanel />
    </div>
  {/if}
</Popover>
