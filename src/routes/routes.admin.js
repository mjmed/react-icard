import { AdminLayout } from '../layouts';
import {
    CategoriesAdmin,
    HomeAdmin,
    ProductsAdmin,
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
];

export default routesAdmin;