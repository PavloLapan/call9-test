import {
    FETCH_TOP_STORIES_REQUEST,
    FETCH_TOP_STORIES_SUCCESS,
    FETCH_TOP_STORIES_FAILURE,
} from '../actions/actions';

interface State {
    loading: boolean;
    stories: any[];
    error: string | null;
}

const initialState: State = {
    loading: false,
    stories: [],
    error: null,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TOP_STORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_TOP_STORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                stories: action.payload,
                error: null,
            };
        case FETCH_TOP_STORIES_FAILURE:
            return {
                ...state,
                loading: false,
                stories: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;