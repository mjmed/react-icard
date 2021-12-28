import React from 'react';

import './ClientLayout.scss';

export function ClientLayout(props) {

    const { children } = props;

    return (
        <div>
            <h3>Client Layout</h3>
            { children }
        </div>
    )
}
