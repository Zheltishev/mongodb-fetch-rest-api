import { createHeader } from '../header/header';
import { createMain } from '../main/main';
import { modalAddUser } from '../modal/modalAddUser';
import { modalChangeUser } from '../modal/modalChangeUser';
import { usersList } from '../listUsers/usersList';

export function render() {
    const body = document.body;
    modalAddUser();
    modalChangeUser();
    const container = document.createElement('div');

    body.classList.add('bg-dark', 'text-light');
    container.classList.add('container');
    body.append(container);

    container.append(createHeader('mongodb fetch rest api'));
    container.append(createMain());
    container.append(usersList());
}
