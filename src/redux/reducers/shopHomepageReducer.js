import { SHOPHOMEPAGEUSER } from "../actionTypes/actionTypes";

const initialstate = {
    user: [],
    id: '',
}


const shopHompageReducer = (state = initialstate, actions) => {
    switch (actions.type) {

        case SHOPHOMEPAGEUSER:

            return {
                ...state,
                user: [actions.payload.data],
                id: actions.payload.id

            }
        default:
            return state;

    }
}

export default shopHompageReducer;