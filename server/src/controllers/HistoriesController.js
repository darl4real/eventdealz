const {
  History,
  Event
} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [{
          model: Event
        }],
        order: [
          ['createdAt', 'DESC']
        ]
      })
        .map(history => history.toJSON())
        .map(history => _.extend({},
          history.Event,
          history
        ))
      res.send(_.uniqBy(histories, history => history.EventId))
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the history'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const { eventId } = req.body
      const history = await History.create({
        eventId: eventId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'an error has occured trying to create the history object'
      })
    }
  }
}
