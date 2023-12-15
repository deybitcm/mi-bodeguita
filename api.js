const API = "http://192.168.1.39:3000/api/usuarios";

export const getuser = async (id) => {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
}