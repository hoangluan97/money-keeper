import { 
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
} from "../constants/postConstant";
const initialState = {
requesting: false,
success: false,
message: null,
data: null,
}

const postReducers = (state = initialState, payload) =>{
switch(payload.type){
    case FETCH_POSTS_REQUEST:
        return state;
        break;
    case FETCH_POSTS_SUCCESS:
        return state;
    case FETCH_POSTS_ERROR:
        return state;
    default:
        return state;
}
}
export default postReducers;