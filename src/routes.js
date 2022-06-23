import Home from "./pages/Home"
import Requisites from "./pages/University/Requisites"
import VirtualReception from "./pages/University/VirtualReception"

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Requisites',
        path: '/university/requisites',
        component: Requisites
    },
    {
        name: 'VirtualReception',
        path: '/university/virtual_reception',
        component: VirtualReception
    }
]

export default routes