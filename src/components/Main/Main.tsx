import React from 'react';

import './Main.css';
import { header, sofia, sardinia, boat, lisbon, sea } from '../../assets/background'
import Item from './Item/Item';
import { Layers } from './Item/types';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LazyLoading from '../LazyLoading/LazyLoading';

const Main: React.FC = () => {

    const items: JSX.Element[] = [
        <Item layer={Layers.DarkBlue} key="winterbaltic" title="winter baltic sea" image={boat} link='/winterbaltic' />,
        <Item layer={Layers.DarkGrey} key="differentplaces" title="different places" image={lisbon} link='/differentplaces' />,
        <Item layer={Layers.DarkBlue} key="aroundpoland" title="around poland" image={sea} link='/aroundpoland' />,
        <Item layer={Layers.DarkBlue} key="sardinia" title="sardinia" image={sardinia} link='/sardinia' />,
        <Item layer={Layers.Grey} key="sofia" title="sofia" image={sofia} link='/sofia' />,
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