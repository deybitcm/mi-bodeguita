import axios from 'axios';

const API = "http://192.168.1.46:3000/api";

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
        const query = await fetch(`${API}/usuarios/auth/verifyinit/${phone}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });        
        return await query.json();
    }
    catch (error ) {
        console.log({ruta: `${API}/usuarios/auth/verifyinit/${phone}`})
        console.log({error});
    }
}

export const verifycode = async (phone, code) => {
    try {
        const query = await fetch(`${API}/usuarios/auth/verifycode/${phone}/${code}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}