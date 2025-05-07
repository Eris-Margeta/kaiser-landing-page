import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { astroImageTools } from "astro-imagetools";
import image from '@astrojs/image';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: "https://ponuda.restoran-kaiser.com",
  integrations: [tailwind(), compress(), astroImageTools , image({
    serviceEntryPoint: '@astrojs/image/sharp',
  }), partytown(
    {
      forward: ['dataLayer.push'],
      config: { debug: false },
    }
  )] 
});