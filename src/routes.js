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
import InformationCenter from "./pages/Structure/centers/InformationCenter"
import DigitalLearningTechnologiesCenter from "./pages/Structure/centers/DigitalLearningTechnologiesCenter"
import PersonalTrainingCenter from "./pages/Structure/centers/PersonalTrainingCenter"
import IndustrialTrainingCenter from "./pages/Structure/centers/IndustrialTrainingCenter"
import JapanInnovationCenter from "./pages/Structure/centers/JapanInnovationCenter"
import MasterSystem from "./pages/Structure/sections/MasterSystem"
import ResearchingSystemSection from "./pages/Structure/sections/ResearchingSystemSection"
import Faculties from "./pages/Structure/faculties"
import Chairs from "./pages/Structure/chairs"
import Branches from "./pages/Structure/branches"
import Bachelor from "./pages/students/bachelor"
import Hymn from "./pages/Emblames/Hymn"
import Flag from "./pages/Emblames/Flag"
import CoatOfArms from "./pages/Emblames/CoatOfArms"
import Doktorantura from "./pages/Activity/ScienceAndInnovation/Doktorantura"
import Innovation from "./pages/Activity/ScienceAndInnovation/Innovation"
import Science from "./pages/Activity/ScienceAndInnovation/Science"
import WorkingWithYoungPeople from "./pages/Activity/WorkingWithYoungPeople"
import CulturalAndEnlightenment from "./pages/Activity/CulturalAndEnlightenment"
import DepartmentOfInternationalCooperation
    from "./pages/Activity/InternationalRelations/DepartmentOfInternationalCooperation"
import CreativeSpark from "./pages/Activity/InternationalRelations/CreativeSpark"

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
    {
        name: 'researching_system_section',
        path: '/sections/researching_system_section',
        component: ResearchingSystemSection
    },
    // faculties
    {
        name: 'faculties',
        path: '/faculties',
        component: Faculties
    },
    // chairs
    {
        name: 'chairs',
        path: '/chairs',
        component: Chairs
    },
    // branches
    {
        name: 'branches',
        path: '/branches/olmaliq_branch',
        component: Branches
    },

    // Activity
    {
        name: 'financial_activity',
        path: '/activity/financial_activity',
        component: FinancialActivity
    },
    {
        name: 'doktorantura',
        path: '/activity/doktorantura',
        component: Doktorantura
    },
    {
        name: 'innovation',
        path: '/activity/innovation',
        component: Innovation
    },
    {
        name: 'science',
        path: '/activity/science',
        component: Science
    },
    {
        name: 'working_with_young_people',
        path: '/activity/working_with_young_people',
        component: WorkingWithYoungPeople
    },
    {
        name: 'cultural_and_enlightenment',
        path: '/activity/cultural_and_enlightenment',
        component: CulturalAndEnlightenment
    },
    {
        name: 'department_of_international_cooperation',
        path: '/activity/department_of_international_cooperation',
        component: DepartmentOfInternationalCooperation
    },
    {
        name: 'creative_spark',
        path: '/activity/creative_spark',
        component: CreativeSpark
    },

    // students
    {
        name: 'bachelor',
        path: '/students/bachelor',
        component: Bachelor
    },

    // UZB em-blames hymn, flag, coat of arms
    {
        name: 'hymn',
        path: '/em_blames/hymn',
        component: Hymn
    },
    {
        name: 'flag',
        path: '/em_blames/flag',
        component: Flag
    },
    {
        name: 'coat_of_arms',
        path: '/em_blames/coat_of_arms',
        component: CoatOfArms
    }
]

export default routes