import { BASE_API, PAYMENT_STATUS } from '../utils/constants';

export async function createPaymentApi(paymentData) {

    try {
        
        const url = `${BASE_API}/payments/`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData)
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function getPaymentByTableApi(idTable) {

    try {

        const tableFilter = `table=${idTable}`;
        const statusFilter = `statusPayment=${PAYMENT_STATUS.PENDING}`;

        const url = `${BASE_API}/payments/?${tableFilter}&${statusFilter}`;
        const params = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}

export async function closePaymentApi(idPayment) {

    try {
        const url = `${BASE_API}/payments/${idPayment}/`;
        const params = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                statusPayment: PAYMENT_STATUS.PAID
            })
        };

        await fetch(url, params);
        
    } catch (error) {
        throw error;
    }
}