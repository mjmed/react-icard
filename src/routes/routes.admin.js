import { AdminLayout } from '../layouts';
import {
    CategoriesAdmin,
    HomeAdmin,
    ProductsAdmin,
    TablesAdmin,
    UsersAdmin
} from '../pages/Admin';


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
    {
        path: '/admin/products',
        layout: AdminLayout,
        component: ProductsAdmin,
    },
    {
        path: '/admin/tables',
        layout: AdminLayout,
        component: TablesAdmin,
    },
];

export default routesAdmin;