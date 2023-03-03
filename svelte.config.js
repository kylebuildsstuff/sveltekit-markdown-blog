import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    // https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#approach-2-dynamic-routes
    mdsvex({
      extensions: ['.md', '.svx'],
      // https://mdsvex.com/docs#layouts
      layout: './src/routes/post.svelte'
      // layout: {
      //   // _: './src/routes/post.svelte'
      //   blog: './src/routes/post.svelte'
      // }
    })
  ],
  extensions: ['.svelte', '.md', '.svx'],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter()
  }
};

export default config;
