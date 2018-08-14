import CreateSong from '@/components/CreateSong'
import EditEvent from '@/components/EditEvent'
import Events from '@/components/Events/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Router from 'vue-router'
import ViewEvent from '@/components/ViewEvent/Index'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/events',
            name: 'events',
            component: Event
        },
        {
            path: '/events/create',
            name: 'events-create',
            component: CreateEvent
        },
        {
            path: '/events/:eventId',
            name: 'event',
            component: ViewEvent
        },
        {
            path: '/events/:eventId/edit',
            name: 'event-edit',
            component: EditEvent
        },
        {
            path: '*',
            redirect: 'events'
        }
    ]
})