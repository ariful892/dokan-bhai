import { SIDE_NAVBAR } from "../actionTypes/actionTypes";

const initialState = {
    sideNavbar: false,
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDE_NAVBAR:
            return {
                ...state,
                sideNavbar: !state.sideNavbar
            }
        default:
            return state;
    }
}

export default navbarReducer;