import * as thumbnails from './thumbnails';
import * as desktopPhotos from './desktop';
import * as mobilePhotos from './phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1 } },
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2 } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3 } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4 } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6 } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8 } },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9 } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10 } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11 } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12 } },
    { thumbnail: thumbnails.img13, photo: { desktop: desktopPhotos.img13, mobile: mobilePhotos.img13 } },
    { thumbnail: thumbnails.img14, photo: { desktop: desktopPhotos.img14, mobile: mobilePhotos.img14 } },
    { thumbnail: thumbnails.img15, photo: { desktop: desktopPhotos.img15, mobile: mobilePhotos.img15 } },
    { thumbnail: thumbnails.img16, photo: { desktop: desktopPhotos.img16, mobile: mobilePhotos.img16 } },
    { thumbnail: thumbnails.img17, photo: { desktop: desktopPhotos.img17, mobile: mobilePhotos.img17 } },
    { thumbnail: thumbnails.img18, photo: { desktop: desktopPhotos.img18, mobile: mobilePhotos.img18 } },
    { thumbnail: thumbnails.img19, photo: { desktop: desktopPhotos.img19, mobile: mobilePhotos.img19 } },
    { thumbnail: thumbnails.img20, photo: { desktop: desktopPhotos.img20, mobile: mobilePhotos.img20 } }
]

export default images;
