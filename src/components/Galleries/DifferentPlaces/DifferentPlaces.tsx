import React from 'react';

import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/differentplaces/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const DifferentPlaces: React.FC = () => {
    return (
        <>
            <Header title={"different places"} image={header} showHome />
            <Gallery images={images} />
            <Footer />
        </>
    )
}

export default DifferentPlaces;
