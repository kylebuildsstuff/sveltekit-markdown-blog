import { writable } from 'svelte/store';

import { defaultMetaDescription, defaultTitleTag } from './shared.constant';

export const titleTag$ = writable(defaultTitleTag);

export const descriptionMetaTag$ = writable(defaultMetaDescription);
