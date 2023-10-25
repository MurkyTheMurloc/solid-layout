import { defineConfig } from 'tsup'
import {vanillaExtractPlugin} from "@vanilla-extract/esbuild-plugin";

export default defineConfig({

    esbuildPlugins: [vanillaExtractPlugin({
        emitCssInSsr: true,
        processCss: true,
        outputCss: true,
    })],
    entryPoints: ["./src/index.ts"],
    outDir: './dist',
})