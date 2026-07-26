// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://hatnikotni.hatnikotni-ventures.workers.dev',
  adapter: cloudflare(),
});