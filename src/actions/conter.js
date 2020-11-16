import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET_COUNT,
    SEND_COUNT
} from "../constants/constants";

export function incrementAction() {
    return {type: INCREMENT_COUNT}
}

export function decrementAction() {
    return {type: DECREMENT_COUNT}
}

export function sendAction(data) {
    return {type: SEND_COUNT, payload: data}
}

export function resetAction() {
    return {type: RESET_COUNT}
}

