const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const EventsController = require('./controllers/EventsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/events',
    EventsController.index)
  app.get('/events/:eventId',
    EventsController.show)
  app.put('/events/:eventId',
    EventsController.put)
  app.post('/events',
    EventsController.post)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
}
