import React, { useRef, useContext, useEffect } from 'react';
import { LazyLoadingProps } from './types';
import './LazyLoading.css';
import { ActionNames, AppState, Action } from '../../state/types';
import { StateContext } from '../../state/store';

const LazyLoading: React.FC<LazyLoadingProps> = ({ className, items }) => {
    const { state, dispatch }: { state: AppState, dispatch: (arg: Action) => void } = useContext(StateContext);

    const loadMoreBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        return () => {
            dispatch({ type: ActionNames.SetScrollYPosition, yScroll: 0 });
        }
    }, [dispatch]);


    const loadMoreItems = () => {
        dispatch({ type: ActionNames.IncrementLoadedItems });
        setTimeout(() => {
            if (loadMoreBtnRef.current)
                window.scrollTo({ top: loadMoreBtnRef.current.offsetTop, left: 0, behavior: 'smooth' });
        }, 0);
    }

    const shouldShowLoadMore = state.loadedItemsNumber < items.length;
    return (
        <>
            <div className={`lazyLoading ${className}`}>
                {items.slice(0, state.loadedItemsNumber)}
            </div>
            <div ref={loadMoreBtnRef}>
                {shouldShowLoadMore &&
                    <>
                        <div onClick={loadMoreItems} className='loadMoreBtn'>show more</div>
                    </>
                }
            </div>
        </>
    )
}

export default LazyLoading;