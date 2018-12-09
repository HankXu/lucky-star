import Home from '../../home/Home';
import Setting from '../../setting/Setting';
import List from '../../list/list'

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
        path: '/setting',
        exact: false,
        component: Setting
    },
];

export default ROUTE;