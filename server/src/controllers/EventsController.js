const { Event } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            let events = null
            const search = req.query.search
            if (search) {
                events = await Event.findAll({
                    where: {
                        $or: [
                            'title', 'owner', 'type', 'album'
                        ].map(key => ({
                            [key]: {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                events = await Event.findAll({
                    limit: 10
                })
            }
            res.send(events)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to fetch the events'
            })
        }
    },
    async show(req, res) {
        try {
            const event = await Event.findById(req.params.eventId)
            res.send(event)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the events'
            })
        }
    },
    async post(req, res) {
        try {
            const event = await Event.create(req.body)
            res.send(event)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to create the event'
            })
        }
    },
    async put(req, res) {
        try {
            await Event.update(req.body, {
                where: {
                    id: req.params.eventId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to update the event'
            })
        }
    }
}