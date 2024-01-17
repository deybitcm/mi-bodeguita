import axios from 'axios';

const API = "https://restapi-nodejs-mysql-production-bf21.up.railway.app/api";

// usar axios para hacer las peticiones

// obtener clientes con axios

export const getCustomers = async () => {
    try {
        const query = await axios.get(`${API}/personas/clientes`);
        return query.data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getClients = async () => {
    try {
        const query = await fetch(`${API}/personas/clientes`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

// obtener productos con axios
export const getProducts = async () => {
    try {
        const query = await axios.get(`${API}/productos`);
        return query.data;
    }
    catch (error) {
        console.log(error);
    }
}

// export const getProducts = async () => {
//     try {
//         const query = await fetch(`${API}/productos`);
//         return await query.json();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

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

export const getSuplliers = async () => {
    try {
        const query = await fetch(`${API}/personas/proveedores`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const getEmployees = async () => {
    try {
        const query = await fetch(`${API}/personas/colaboradores`);
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
            body: JSON.stringify({celular: phone})
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
            body: JSON.stringify({celular: phone, codigo: code})
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

// Obtener tipos de tienda con axios
export const getStoreTypes = async () => {
    try {
        const query = await axios.get(`${API}/tiendas/tipos`);
        return query.data;
    }
    catch (error) {
        console.log(error);
    }
}