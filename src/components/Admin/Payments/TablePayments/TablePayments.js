import React, { useState } from 'react';
import { map } from 'lodash';
import moment from 'moment';

import { Button, Icon, Table } from 'semantic-ui-react';

import './TablePayments.scss';
import { ModalBasic } from '../../../Common';
import { PaymentProductList } from '../../../Admin';


export function TablePayments(props) {

    const { payments } = props;

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);

    const getIconPayment = (key) => {

        if (key === 'CARD') return "credit card alternative";
        if (key === 'CASH') return "money bill alternate";
        return null;
    }

    const openCloseModal = () => setShowModal(prev => !prev);

    const showDetails = (payment) => {
        setTitleModal(`Pedidos de la mesa ${payment.table_data.number}`);
        setContentModal(<PaymentProductList payment={payment} />);
        openCloseModal();
    }

    return (
        <>
            <Table className='table-payments-admin'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Mesa</Table.HeaderCell>
                        <Table.HeaderCell>Total</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Tipo de pago</Table.HeaderCell>
                        <Table.HeaderCell>Fecha</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { map(payments, (payment, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{payment.id}</Table.Cell>
                            <Table.Cell>{payment.table_data.number}</Table.Cell>
                            <Table.Cell>$ {payment.totalPayment}</Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Icon size='large' name={getIconPayment(payment.paymentType)} />
                            </Table.Cell>
                            <Table.Cell>{moment(payment.created_at).format('DD/MM/YYYY - HH:mm')}</Table.Cell>
                            <Table.Cell textAlign='right'>
                                <Button icon onClick={() => showDetails(payment)}>
                                    <Icon name='eye' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <ModalBasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
