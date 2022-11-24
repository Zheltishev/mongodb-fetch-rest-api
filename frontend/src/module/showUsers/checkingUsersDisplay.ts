import { showUsers } from './showUsers';

export function checkingUsersDisplay() {
    const usersList = document.querySelector('.users-list');

    if (usersList?.firstChild != null) {
        showUsers();
    }
}
