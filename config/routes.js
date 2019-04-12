/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    // 'GET /api/users': 'UserController.getUsers',
    // 'GET /api/users/:id': 'UserController.getUserById',
    // 'POST /api/users': 'UserController.postUsers',
    // 'PUT /api/users/:id': 'UserController.putUsers',
    // 'DELETE /api/users/:id': 'UserController.deleteUsers',

    'GET /api/users': { action: 'user/get-user' },
    'GET /api/users/:id': { action: 'user/get-user-by-id' },
    'POST /api/users': { action: 'user/post-user' },
    'PUT /api/users/:id': { action: 'user/put-user' },
    'DELETE /api/users/:id': { action: 'user/delete-user' },
};
