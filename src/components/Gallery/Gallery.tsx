import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Gallery.css';
import { GalleryProps } from './types';
import { AppState, Action, ActionNames } from '../../state/types';
import { StateContext } from '../../state/store';

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const { state, dispatch }: { state: AppState, dispatch: (arg: Action) => void } = useContext(StateContext);

    useEffect(() => {
        window.scrollTo(0, state.scrollYPosition);
        return () => {
            dispatch({ type: ActionNames.SetScrollYPosition, yScroll: window.scrollY });
        }
    }, []);

    return (
        <div>
            <div className='photos'>
                {images.map((image, index) =>
                    <Link key={index} className='thumbnail' to={{
                        pathname: '/preview',
                        state: { selectedPhotoIndex: index, images: images }
                    }}>
                        <img src={image.thumbnail} alt="" />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Gallery;