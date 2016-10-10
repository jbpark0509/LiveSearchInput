// import axios from 'axios';

export function register({ fname, lname, email, reemail, password }) {
    return {
        type: 'REGISTER_USER',
        payload: { fname, lname, email, reemail, password }
    };
}

export function login({ email, password }) {
    return {
        type: 'LOGIN_USER',
        payload: { email, password }
    };
}
