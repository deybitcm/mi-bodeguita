const API = "http://192.168.1.39:3000/api/";

export const getPersons = async () => {
    try {
        const query = await fetch(`${API}personas`);
        return await query.json();
    }
    catch (error) {
        console.log(error);
    }
}