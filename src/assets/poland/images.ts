import * as thumbnails from './thumbnails';
import * as desktopPhotos from './desktop';
import * as mobilePhotos from './phone';

import { PictureWithThumbnail } from '../../common/types';

const images: PictureWithThumbnail[] = [
    { thumbnail: thumbnails.img1, photo: { desktop: desktopPhotos.img1, mobile: mobilePhotos.img1, data: "Kuźnica", title: "Baltic Sea" } },
    { thumbnail: thumbnails.img2, photo: { desktop: desktopPhotos.img2, mobile: mobilePhotos.img2, data: "Gdańsk", title: "MTB" } },
    { thumbnail: thumbnails.img3, photo: { desktop: desktopPhotos.img3, mobile: mobilePhotos.img3, data: "Warsaw", title: "skyscraper" } },
    { thumbnail: thumbnails.img4, photo: { desktop: desktopPhotos.img4, mobile: mobilePhotos.img4, data: "Warsaw" } },
    { thumbnail: thumbnails.img5, photo: { desktop: desktopPhotos.img5, mobile: mobilePhotos.img5, data: "Warsaw" } },
    { thumbnail: thumbnails.img6, photo: { desktop: desktopPhotos.img6, mobile: mobilePhotos.img6, title: "Morning", data: "Kraków" } },
    { thumbnail: thumbnails.img7, photo: { desktop: desktopPhotos.img7, mobile: mobilePhotos.img7, title: "Morning", data: "Kraków" } },
    { thumbnail: thumbnails.img8, photo: { desktop: desktopPhotos.img8, mobile: mobilePhotos.img8, title: "Chill", data: "Kraków" },  },
    { thumbnail: thumbnails.img9, photo: { desktop: desktopPhotos.img9, mobile: mobilePhotos.img9, title: "Hey Joe", data: "Wrocław" } },
    { thumbnail: thumbnails.img10, photo: { desktop: desktopPhotos.img10, mobile: mobilePhotos.img10, data: "Tatry" } },
    { thumbnail: thumbnails.img11, photo: { desktop: desktopPhotos.img11, mobile: mobilePhotos.img11, data: "Tatry" } }
]

export default images;
