import {
    SEND_TEXT
} from "../constants/constants";

export function sendTextAction(data) {
    return {type: SEND_TEXT, payload: data}
}