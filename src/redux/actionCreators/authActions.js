import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../actionTypes/actionTypes";

// signup
export const register = (userData) => async (dispatch, getState) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: userData });

    try {

        const res = await fetch('http://dev.backend.dokanbhai.com:3003/api/users/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json"
            },
        })

        const data = await res.json()
        console.log(data);

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }


}




//signin

export const signin = (userData) => async (dispatch, getState) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: userData });

    try {

        const res = await fetch('http://dev.backend.dokanbhai.com:3003/api/users/signin', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json"
            },
        })

        const data = await res.json()
        console.log(data);

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

    }


}



export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    ;
    dispatch({ type: USER_SIGNOUT });
};