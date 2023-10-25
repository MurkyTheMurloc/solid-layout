import { defineConfig } from 'astro/config';
import vanillaExtract from 'astro-vanilla-extract';
import rollup from "astro-rollup";



export default defineConfig({
    integrations: [vanillaExtract({
        emitCssInSsr: true,
    })],

});
