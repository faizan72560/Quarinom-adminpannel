import axios from 'axios'

export const loginuser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LoginRequest" })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
        const { data } = await axios.post('http://localhost:5000/api/v1/login', { email, password }, config)
        console.log(data)


        dispatch({
            type: "LoginSuccess",
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: "LoginFailure",
            payload: err
        })
    }
}


export const register = (formdata) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest"
        })
        console.log(formdata)
        for (var pair of formdata.entries()) {
            console.log(pair[0] + ' - ' + pair[1]);
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true
        }


        const { data } = await axios.post('http://localhost:5000/api/v1/register', formdata, config)
        console.log(data)

        dispatch({
            type: "LoginSuccess",
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: "LoginFailure",
            payload: err.response.data.message
        })

    }
}




export const getuser = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LoadRequest'
        })

        const config = {

            withCredentials: true
        }


        const { data } = await axios.get('http://localhost:5000/api/v1/me', config)
        console.log(data)
        dispatch({
            type: "LoadSuccess",
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: "LoadFailure",
            payload: err.response.data.message
        })
    }

}




export const logoutuser = () => async (dispatch) => {
    try {

        const config = {

            withCredentials: true
        }


        dispatch({ type: "LogoutUserRequest" })
        console.log("hello")

        const { data } = await axios.get('http://localhost:5000/api/v1/logout', config)
        console.log(data)


        dispatch({
            type: "LogoutUserSuccess",
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: "LogoutUserFailure",
            payload: err.response.data.message
        })
    }
}




