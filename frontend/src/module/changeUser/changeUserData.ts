import { changeUserId } from './changeUserId';

type newUserData = {
    name: string;
    age: number;
};

export async function changeUserData(data: newUserData) {
    type formatNewData = {
        id: string;
        name: string;
        age: number;
    };

    const newDataChangeUser: formatNewData = {
        id: changeUserId,
        name: data.name,
        age: data.age,
    };

    return fetch('http://localhost:8081/change-user', {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(newDataChangeUser),
    });
}
