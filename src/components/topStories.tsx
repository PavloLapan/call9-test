import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopStoriesRequest, fetchTopStoriesSuccess, fetchTopStoriesFailure } from '../redux/actions/actions';

const TopStories: React.FC = () => {
    const dispatch = useDispatch();
    const { loading, stories, error } = useSelector((state: any) => state);

    useEffect(() => {
        dispatch(fetchTopStoriesRequest());

        setTimeout(() => {
            fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
                .then(response => response.json())
                .then(storyIds => {
                    // Fetch the details of the first 9 stories
                    const topStoryIds = storyIds.slice(0, 9);
                    const storyPromises = topStoryIds.map((id: number) =>
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.json())
                    );

                    Promise.all(storyPromises)
                        .then(stories => {
                            dispatch(fetchTopStoriesSuccess(stories));
                        })
                        .catch(error => {
                            dispatch(fetchTopStoriesFailure(error.message));
                        });
                })
                .catch(error => {
                    dispatch(fetchTopStoriesFailure(error.message));
                });
        }, 1000);
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>HackerNews Top Stories</h1>
            <ul>
                {stories.map((story: any) => (
                    <li key={story.id}>{story.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TopStories;