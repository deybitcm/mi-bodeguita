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