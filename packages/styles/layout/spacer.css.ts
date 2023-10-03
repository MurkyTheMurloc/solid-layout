import {createVar, fallbackVar, style} from '@vanilla-extract/css'

export const width = createVar(
)
export const height = createVar()
export const spacer = style({
    width: fallbackVar(width, "0px"),
    height: fallbackVar(height, "0"),
})