import * as thumbnails from './thumbnails';
import * as desktopPhotos from './desktop';
import * as mobilePhotos from './phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1 } },
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2 } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3 } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4 } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5 } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6 } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7 } }
]

export default images;
