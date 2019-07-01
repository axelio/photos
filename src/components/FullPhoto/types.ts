import { PictureWithThumbnail } from "../../common/types";

export enum KeyboardKeyCodes {
    Escape = 27,
    RightArrow = 39,
    LeftArrow = 37,
    Info = 73
}

export type FullPhotoPassedParams = {
    state: {
        images: PictureWithThumbnail[],
        selectedPhotoIndex: number
    }
}

export type FullPhotoRouterProps = {
    location: FullPhotoPassedParams
}