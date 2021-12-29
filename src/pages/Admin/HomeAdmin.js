import React from 'react'
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../hooks'

export function HomeAdmin() {

    const { logout } = useAuth();

    return (
        <div>
            <h2>Home Admin</h2>
            <Button secondary onClick={ logout }>Cerrar sesión</Button>
        </div>
    )
}
