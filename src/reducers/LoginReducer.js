const initialState = {
    token: localStorage.getItem('token'),
    alert: {
        show: false,
        message: '',
        variant: 'light'
    },
    error: {
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGOUT':
            localStorage.removeItem('token')
            return {
                ...state, token: ''
            }

        case 'AUTH_LOGIN':
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload
            }

        case 'AUTH_LOGIN_FAIL':
            return {
                ...state,
                alert: {
                    show: true,
                    message: action.payload,
                    variant: 'danger'
                }
            }

        case 'AUTH_REGISTER':
            return {
                ...state,
                alert: {
                    show: true,
                    message: action.payload,
                    variant: 'success'
                }
            }

        case 'AUTH_REGISTER_FAIL':
            return {
                ...state,
                alert: {
                    show: true,
                    message: action.payload,
                    variant: 'danger'
                }
            }

        case 'AUTH_REGISTER_INVALID':
            return {
                ...state,
                error: {
                    ...state.error,
                    ...action.payload
                }
            }

        default:
            return state
    }
}

export default login