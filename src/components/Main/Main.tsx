import React from 'react';

import './Main.css';
import { header, boat, lisbon, sea } from '../../assets/background'
import Item from './Item/Item';
import { Layers } from './Item/types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LazyLoading from '../LazyLoading/LazyLoading';

const Main: React.FC = () => {

    const items: JSX.Element[] = [
        <Item layer={Layers.DarkBlue} key="nature" title="nature" image={sea} link='/nature' />,
        <Item layer={Layers.DarkGrey} key="architecture" title="architecture" image={lisbon} link='/architecture' />,
        <Item layer={Layers.DarkBlue} key="winterbaltic" title="winter baltic sea" image={boat} link='/winterbaltic' />,
    ]

    return (
        <>
            <Header image={header} title={'some galleries'} />
            <section className='items'>
                <h2>photos</h2>
                <hr />
                <LazyLoading
                    items={items}
                    className={'mainLazyLoading'} />
            </section>
            <Footer />
        </>
    )
}

export default Main;