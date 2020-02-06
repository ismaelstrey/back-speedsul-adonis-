'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('images/:path', 'ImageController.show')
Route.group(() => {
  Route.get('/app', 'AppController.index')
  Route.post('properties/:id/images', 'ImageController.store')
  Route.resource("tweets", "TweetController").apiOnly().except('update')
  Route.resource('properties', 'PropertyController').apiOnly()
}).middleware(['auth'])
