import {
    SEND_TEXT
} from "../constants/constants";

const initialState = {
    textData: "",
    error: null
}

const mainReducer = (state= initialState, action) => {
    switch (action.type) {
        case SEND_TEXT:
            return {
                ...state,
                textData: action.payload
            }

        default:
            return state;
    }
}

export default mainReducer;