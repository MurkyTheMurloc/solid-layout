import {createVar, fallbackVar, globalStyle, style} from '@vanilla-extract/css'

export const width = createVar(
)
export const height = createVar()

globalStyle(".solid-layout-spacer",{
    width: fallbackVar(width, "0px"),
    height: fallbackVar(height, "0px"),
})