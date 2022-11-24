import { showUsers } from '../showUsers/showUsers';

export async function deleteUser(id: string) {
    const url = `http://localhost:8081/delete-user/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    });

    showUsers();

    return response.json;
}
