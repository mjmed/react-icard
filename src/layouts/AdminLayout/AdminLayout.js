import React from 'react';

import './AdminLayout.scss';

export function AdminLayout(props) {

    const { children } = props;

    return (
        <div>
            <h3>Admin Layout</h3>
            { children }
        </div>
    )
}
