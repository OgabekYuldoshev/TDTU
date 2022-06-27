import Home from "./pages/Home"

// University
import RectorCongratulations from "./pages/University/RectorCongratulations"
import UniversityRegulations from "./pages/University/UniversityRegulations"
import RegulatoryDoc from "./pages/University/RegulatoryDocuments"
import HistoryUniversity from "./pages/University/HistoryOfUniversity"
import Requisites from "./pages/University/Requisites"
import VirtualReception from "./pages/University/VirtualReception"
// News
import News from "./pages/News/List"
import NewsSingle from "./pages/News/Single"

// Structure
import Structure from "./pages/Structure/rectorate"

// Activity
import FinancialActivity from "./pages/Activity/FinancialActivity"
import InformationCenter from "./pages/Structure/centers/InformationCenter";
import DigitalLearningTechnologiesCenter from "./pages/Structure/centers/DigitalLearningTechnologiesCenter";
import PersonalTrainingCenter from "./pages/Structure/centers/PersonalTrainingCenter";
import IndustrialTrainingCenter from "./pages/Structure/centers/IndustrialTrainingCenter";
import JapanInnovationCenter from "./pages/Structure/centers/JapanInnovationCenter";
import MasterSystem from "./pages/Structure/sections/MasterSystem";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    // NEWS

    {
        name: 'news',
        path: '/news',
        component: News
    },
    {
        name: 'news-single',
        path: '/news/:id',
        component: NewsSingle
    },

    // UNIVERSITY
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
    },

    // Structure
    {
        name: 'rectorate',
        path: '/structure/rectorate',
        component: Structure
    },

    //centers
    {
        name: 'information_center',
        path: '/centers/information_center',
        component: InformationCenter
    },
    {
        name: 'digital_learning_technologies_center',
        path: '/centers/digital_learning_technologies_center',
        component: DigitalLearningTechnologiesCenter
    },
    {
        name: 'personal_training_center',
        path: '/centers/personal_training_center',
        component: PersonalTrainingCenter
    },
    {
        name: 'industrial_training_center',
        path: '/centers/industrial_training_center',
        component: IndustrialTrainingCenter
    },
    {
        name: 'japan_innovation_center',
        path: '/centers/japan_innovation_center',
        component: JapanInnovationCenter
    },

    //sections
    {
        name: 'master_system',
        path: '/sections/master_system',
        component: MasterSystem
    },

    // Activity
    {
        name: 'financial_activity',
        path: '/activity/financial_activity',
        component: FinancialActivity
    }
]

export default routes