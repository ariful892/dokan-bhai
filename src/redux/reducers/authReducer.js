import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../actionTypes/actionTypes";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
}
export const userRegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading1: true };
        case USER_REGISTER_SUCCESS:
            return { loading1: false, userInfoRegister: action.payload };
        case USER_REGISTER_FAIL:
            return { loading1: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
};
export const userSigninReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading2: true };
        case USER_SIGNIN_SUCCESS:
            return { loading2: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return { loading2: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
};
