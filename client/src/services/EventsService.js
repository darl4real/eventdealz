import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('events', {
      params: {
        search: search
      }
    })
  },
  show (eventId) {
    return Api().get(`events/${eventId}`)
  },
  post (event) {
    return Api().post('events', event)
  },
  put (event) {
    return Api().put(`events/${event.id}`, event)
  }
}
