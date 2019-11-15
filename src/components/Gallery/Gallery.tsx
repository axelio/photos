import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './Gallery.css';
import { GalleryProps } from './types';
import { AppState, Action, ActionNames } from '../../state/types';
import { StateContext } from '../../state/store';
import Spinner from '../Spinner/Spinner';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const { state, dispatch }: { state: AppState, dispatch: (arg: Action) => void } = useContext(StateContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        window.scrollTo(0, state.scrollYPosition);
        return () => {
            dispatch({ type: ActionNames.SetScrollYPosition, yScroll: window.scrollY });
        }
    }, []);

    const imageLoaded = () => {
        setLoadedImages(loadedImages + 1);
        if (loadedImages === images.length - 1) setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <div className='spinnerContainer'><Spinner /></div>}
            <div className='photos' style={{ display: `${isLoading ? 'none' : ''}` }}>
                {images.map((image, index) =>
                    <Link key={index} className='thumbnail' to={{
                        pathname: '/preview',
                        state: { selectedPhotoIndex: index, images: images }
                    }}>
                        <img src={image.thumbnail} onLoad={imageLoaded} alt="" />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Gallery;