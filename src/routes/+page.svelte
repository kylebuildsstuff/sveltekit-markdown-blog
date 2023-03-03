<script lang="ts">
  import { onMount } from 'svelte';

  import { defaultMetaDescription } from '$lib/shared/shared.constant';
  import { descriptionMetaTag$, titleTag$ } from '$lib/shared/shared.store';
  import { POSTS_LIST } from '$lib/shared/shared.constant';

  import PostCard from './post-card.svelte';
  import PostListItem from './post-list-item.svelte';

  const featuredPosts = POSTS_LIST.filter((post) => post.isFeatured);
  const posts = POSTS_LIST.filter((post) => !post.isFeatured);

  onMount(() => {
    titleTag$.set('Articles about text to speech generation from beepbooply');
    descriptionMetaTag$.set(defaultMetaDescription);
  });
</script>

<div class="relative bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28">
  <div class="relative mx-auto max-w-7xl">
    <div class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        From the blog
      </h1>
    </div>
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      {#each featuredPosts as { url, title, description, author, date }}
        <PostCard {url} {title} {description} {author} {date} />
      {/each}
    </div>

    <!-- Lists -->
    <ul class="divide-y divide-gray-200">
      {#each posts as { url, title, description, author, date }}
        <PostListItem {url} {title} {description} {author} {date} />
      {/each}
    </ul>
  </div>
</div>
