import React from 'react';
import Gallery from '../../Gallery/Gallery';
import { header } from '../../../assets/background';
import images from '../../../assets/sofia/images';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './Sofia.css'

const Sofia: React.FC =() => {

    return (
        <>
            <Header image={header} title={"sofia"} showHome />
            <section className='sofia-container'>
                <h1>FEB '19</h1>
                <p>
                    Stolica Bułgarii zimą może sprawić niekorzystne pierwsze wrażenie przez zaniedbane elewacje budynków, szarość czy pojawiający się w niektóre dni smog.
                </p>

                <p>
                    To wrażenie znika po kilku dniach, kiedy w słoneczne dni wszystkie ławki w parkach są zajęte przez sympatycznych ludzi, a spacer po centrum jest czystą przyjemnością.
                    Do tego dochodzi piękny widok otaczających miasto gór. Wystarczy godzina aby udać się w okolice gdzie można podziwiać przepiękne krajobrazy.
                </p>
            </section>
            <Gallery images={images} />
            <Footer />

        </>
    );
}

export default Sofia;