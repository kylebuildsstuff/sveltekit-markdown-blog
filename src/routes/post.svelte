<script lang="ts">
  import { DateTime } from 'luxon';
  import { onMount } from 'svelte';

  import { defaultMetaDescription, defaultTitleTag } from '$lib/shared/shared.constant';
  import { descriptionMetaTag$, titleTag$ } from '$lib/shared/shared.store';
  import Navbar from '$lib/modules/navbar/navbar.svelte';

  export let title = '';
  export let description = '';
  export let publishedAtIso = '';
  // export let author = '';

  $: publishedAt = DateTime.fromISO(publishedAtIso).toLocaleString(DateTime.DATE_FULL);

  onMount(() => {
    titleTag$.set(title || defaultTitleTag);
    descriptionMetaTag$.set(description || defaultMetaDescription);
  });
</script>

<Navbar />

<article>
  <div class="mx-auto max-w-6xl py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
    <div class="text-center">
      <!-- <h2 class="text-lg uppercase font-semibold text-gray-900">{tags}</h2> -->
      <h1
        class="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
      >
        {title}
      </h1>
      <p class="mx-auto mt-3 max-w-xl text-xl text-gray-900">
        {publishedAt}
      </p>
    </div>
  </div>

  <section class="w-full bg-white pb-16 px-4">
    <div class="prose max-w-4xl mx-auto text-gray-900">
      <slot />
    </div>
  </section>
</article>
