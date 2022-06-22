import Home from "./pages/Home"
import Requisites from "./pages/Requisites"
import RectorCongratulations from "./pages/University/rector_congratulations"
import UniversityRegulations from "./pages/University/university_regulations"


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
        name: 'rector_congratulations',
        path: '/university/rector_congratulations',
        component: RectorCongratulations
    },
    {
        name: 'university_regulations',
        path: '/university/university_regulations',
        component: UniversityRegulations
    }
]

export default routes