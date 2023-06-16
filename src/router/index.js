import { createRouter, createWebHistory } from 'vue-router'
import Inbox from './../components/Inbox.vue'
import Archive from './../components/Archive.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { name: 'Inbox' }
        },
        { name: 'Inbox', component: Inbox, path: '/inbox' },
        { name: 'Archive', component: Archive, path: '/archive' }
    ]
})

export default router
