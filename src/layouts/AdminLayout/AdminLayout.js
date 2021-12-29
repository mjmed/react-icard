import React from 'react';

import { LoginAdmin } from '../../pages/Admin';
import { useAuth } from '../../hooks';

import './AdminLayout.scss';


export function AdminLayout(props) {

    const { children } = props;
    const { auth } = useAuth();

    if (!auth) return <LoginAdmin />

    return (
        <div>
            <h3>Admin Layout</h3>
            { children }
        </div>
    )
}
