import Home from "./pages/Home"

import RectorCongratulations from "./pages/University/rector_congratulations"
import UniversityRegulations from "./pages/University/university_regulations"
import RegulatoryDoc from "./pages/University/regulatory_documents"
import HistoryUniversity from "./pages/University/history_of_university";


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
    },
    {
        name: 'regulatory_documents',
        path: '/university/regulatory_documents',
        component: RegulatoryDoc
    },
    {
        name: 'history_of_university',
        path: '/university/history_of_university',
        component: HistoryUniversity
    }
]

export default routes