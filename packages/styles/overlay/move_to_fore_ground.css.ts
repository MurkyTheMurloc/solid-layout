import {createVar, fallbackVar, style} from "@vanilla-extract/css";

export const zIndexForGround = createVar()
export const positionForeGround = createVar()
export const moveToForeGround = style({
    zIndex: zIndexForGround,
    position: fallbackVar(positionForeGround, "absolute"),

});