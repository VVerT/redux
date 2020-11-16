import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET_COUNT,
    SEND_COUNT
} from "../constants/constants";

const initialState = {
    count: 0,
    savedData: 0
}

const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SEND_COUNT:
            return {
                ...state,
                savedData: action.payload
            }
        case RESET_COUNT:
            return {
                ...initialState
            }

        default:
            return state;
    }
}

export default counterReducer;