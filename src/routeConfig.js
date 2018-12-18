import Home from './components/home/Home';
import Setting from './components/setting/Setting';
import List from './components/activity/list/list'
import ActivitySetting from './components/activity/setting/setting';
import AddActivity from './components/activity/add/add';
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
        path: '/add/activity',
        exact: true,
        component: AddActivity
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