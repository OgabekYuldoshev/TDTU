import Home from "./pages/Home"
import Requisites from "./pages/Requisites"


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
    }
]

export default routes