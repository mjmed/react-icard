import { AdminLayout } from '../layouts';
import { CategoriesAdmin ,HomeAdmin, UsersAdmin } from '../pages/Admin';


const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path: '/admin/users',
        layout: AdminLayout,
        component: UsersAdmin,
    },
    {
        path: '/admin/categories',
        layout: AdminLayout,
        component: CategoriesAdmin,
    },
];

export default routesAdmin;