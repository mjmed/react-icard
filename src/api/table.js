import { BASE_API } from '../utils/constants';


export async function getTablesApi(token) {

    try {
        
        const url = `${ BASE_API }/tables/`;
        const params = {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function addTableApi(data, token) {

    try {
        
        const url = `${ BASE_API }/tables/`;
        const params = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${ token }`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function updateTableApi(id, data, token) {

    try {
        
        const url = `${ BASE_API }/tables/${id}/`;
        const params = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${ token }`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function deleteTableApi(id, token) {

    try {
        
        const url = `${ BASE_API }/tables/${id}/`;
        const params = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${ token }`,
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function getTableApi(idTable) {

    try {
        
        const url = `${ BASE_API }/tables/${idTable}/`;

        const response = await fetch(url);
        const result = await response.json();

        return result;
        
    } catch (error) {
        throw error;
    }
}