const API = "http://192.168.1.39:3000/api/empleados";

export const getEmployees = async () => {
    const response = await fetch(API);
    return await response.json();
}