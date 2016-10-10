const stateInit = {
    user: false,
    loaded: false
};

export default function reducer(state = stateInit, action) {
    switch (action.type) {
        case 'REGISTER_USER':
            {
                return {...state, registering: true };
            }
        case 'LOGIN_USER':
            {
                return {...state, loggingIn: true };
            }
        default:
            {
                return state;
            }
    }
}
