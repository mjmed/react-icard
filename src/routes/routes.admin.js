import { AdminLayout } from '../layouts';
import {
    CategoriesAdmin,
    OrdersAdmin,
    ProductsAdmin,
    TablesAdmin,
    TableDetailsAdmin,
    UsersAdmin,
} from '../pages/Admin';


const routesAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: OrdersAdmin,
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
    {
        path: '/admin/table/:id',
        layout: AdminLayout,
        component: TableDetailsAdmin,
    },
];

export default routesAdmin;