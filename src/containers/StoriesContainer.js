import React, {useEffect, useState} from 'react';
import {getStoryIds} from '../services/hnApi';
import {Story} from "../components/Story";
import {GlobalStyle, StoriesContainerWrapper} from "../styles/StoriesContainerStyles";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    const count = useInfiniteScroll();

    useEffect(() => {
        getStoryIds().then(ids => setStoryIds(ids));
    }, [count]);

    return (
        <>
            <GlobalStyle></GlobalStyle>
            <StoriesContainerWrapper data-test-id={"stories-container"}>
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map((storyId) => {
                    return <Story key={storyId} storyId={storyId}/>
                })}
            </StoriesContainerWrapper>
        </>
    );
};
