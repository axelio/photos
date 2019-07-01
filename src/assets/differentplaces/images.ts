import * as thumbnails from './thumbnails';
import * as desktopPhotos from './desktop';
import * as mobilePhotos from './phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, data: "Lisbon", title: "Alfama" } },
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2, data: "Lisbon", title: "Alfama" } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, data: "Lisbon" } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, data: "Lisbon" } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, title: "Volcano", data: "Tenerife" } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Hiking", data: "Tenerife" } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Hiking", data: "Tenerife" } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Ocean", data: "Tenerife" },  },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Chill", data: "Tenerife" } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10, title: "Sun", data: "Tenerife" } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11, data: "Trondheim" } },
    { thumbnail: thumbnails.img12, photo: { desktop: desktopPhotos.img12, mobile: mobilePhotos.img12, data: "Trondheim" } },
    { thumbnail: thumbnails.img13, photo: { desktop: desktopPhotos.img13, mobile: mobilePhotos.img13, data: "Trondheim", title: "Cafe" } },
    { thumbnail: thumbnails.img14, photo: { desktop: desktopPhotos.img14, mobile: mobilePhotos.img14, data: "Trondheim" } }
]

export default images;
