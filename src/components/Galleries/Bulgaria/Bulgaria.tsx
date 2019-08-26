import React from 'react';
import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/bulgaria/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Bulgaria.css'

const Bulgaria: React.FC = () => {
    return (
        <>
            <Header image={header} title={"bulgaria "} showHome />
            <h1 className='title-header'>FEBRUARY/MARCH '19</h1>
            <Gallery images={images} />
            <Footer />
        </>
    );
}

export default Bulgaria;