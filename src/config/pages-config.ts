export let config = {
    'login': {
        'name': 'login',
        'route': '/login',
        'loadChildren': '../app/login/login.module#LoginModule'
    },
    'users': {
        'name': 'users',
        'route': '/users',
        'loadChildren': '../app/users/users.module#UsersModule'
    },
}