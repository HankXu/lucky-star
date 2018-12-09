import Home from '../../home/Home';
import Setting from '../../setting/Setting';

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
        component: Home
    },
    {
        path: '/setting',
        exact: false,
        component: Setting
    },
];

export default ROUTE