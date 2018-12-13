import Home from './components/home/Home';
import Setting from './components/setting/Setting';
import List from './components/list/list'
import ActivitySetting from './components/activity-setting/activity-setting';
import Praticipants from './components/participants/participants';

const ROUTE = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/list',
        exact: true,
        component: List
    },
    {
        path: '/activity/:id',
        exact: true,
        component: List
    },
    {
        path: '/activity/add',
        exact: true,
        component: List
    },
    {
        path: '/setting',
        exact: true,
        component: Setting
    },
    {
        path: '/setting/:id',
        exact: true,
        component: ActivitySetting
    },
    {
        path: '/participants',
        exact: true,
        component: Praticipants
    },
];

export default ROUTE;