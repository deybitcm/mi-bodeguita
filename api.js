import axios from 'axios';

const API = "https://restapi-nodejs-mysql-production-bf21.up.railway.app/api";

export const getClients = async () => {
    try {
        const query = await fetch(`${API}/personas/clientes`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const getProducts = async () => {
    try {
        const query = await fetch(`${API}/productos`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const getSales = async () => {
    try {
        const query = await fetch(`${API}/movimientos/ventas`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const getPurchases = async () => {
    try {
        const query = await fetch(`${API}/movimientos/compras`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const verifyinit = async (phone) => {
    try {
        const query = await fetch(`${API}/usuarios/auth/verifyinit/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phone})
        });        
        return await query.json();
    }
    catch (error ) {
        console.log({error});
    }
}

export const verifycode = async (phone, code) => {
    try {
        const query = await fetch(`${API}/usuarios/auth/verifycode/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phone, code})
        });
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const getStores = async () => {
    try {
        const query = await fetch(`${API}/tiendas`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}