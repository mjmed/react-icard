import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { size } from 'lodash';
import classNames from 'classnames';

import { Label, Button, Icon, Checkbox } from 'semantic-ui-react';

import './TableAdmin.scss';

import { ORDER_STATUS } from '../../../../utils/constants';
import { ReactComponent as IcTable } from '../../../../assets/table.svg';
import { getOrdersByTableApi } from '../../../../api/orders';


export function TableAdmin(props) {

    const { reload, table } = props;

    const [ orders, setOrders ] = useState([]);
    const [ tableBusy, setTableBusy ] = useState(false);

    useEffect(() => {
        
        (async () => {

            const response = await getOrdersByTableApi(table.id, ORDER_STATUS.PENDING);
            setOrders(response);
        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    useEffect(() => {
        
        (async () => {

            const response = await getOrdersByTableApi(table.id, ORDER_STATUS.DELIVERED);

            if (size(response) > 0) setTableBusy(response);
            else setTableBusy(false);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload]);

    return (
        <Link className='table-admin' to={`/admin/table/${table.id}`}>
            { size(orders) > 0 ? (
                <Label circular color='orange'>
                    { size(orders) }
                </Label>
            ): null}

            <IcTable className={classNames({
                pending: size(orders) > 0,
                busy: tableBusy,
            })} />
            <h5>Mesa {table.number}</h5>
        </Link>
    )
}
