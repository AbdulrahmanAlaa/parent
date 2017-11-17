import { environment } from "../environments/environment";

export const API_URLS = {
    'USERS': {
        'LIST':(no,per_page)=> environment.baseUrl + `users?page=${no}&per_page=${per_page}`,
        'SINGLE': (id) => environment.baseUrl + `users/${id}`,
        'EDIT': (id) => environment.baseUrl + `users/${id}`,
        'ADD':environment.baseUrl + 'users',
        'DELETE':(id) => environment.baseUrl + `users/${id}`,
    },
    'LOGIN':environment.baseUrl + 'login'
}
