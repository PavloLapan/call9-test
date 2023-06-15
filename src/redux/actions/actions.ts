export const FETCH_TOP_STORIES_REQUEST = 'FETCH_TOP_STORIES_REQUEST';
export const FETCH_TOP_STORIES_SUCCESS = 'FETCH_TOP_STORIES_SUCCESS';
export const FETCH_TOP_STORIES_FAILURE = 'FETCH_TOP_STORIES_FAILURE';

export const fetchTopStoriesRequest = () => ({
    type: FETCH_TOP_STORIES_REQUEST,
});

export const fetchTopStoriesSuccess = (stories: any[]) => ({
    type: FETCH_TOP_STORIES_SUCCESS,
    payload: stories,
});

export const fetchTopStoriesFailure = (error: string) => ({
    type: FETCH_TOP_STORIES_FAILURE,
    payload: error,
});