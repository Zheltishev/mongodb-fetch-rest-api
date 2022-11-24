import { deleteUser } from '../deleteUser/deleteUser';
import { getChangeUserId } from '../changeUser/changeUserId';
import { createSearchInput } from '../../components/searchInput/searchInput';

export async function showUsers() {
    const usersList = document.querySelector('.users-list');
    const usersListBlock = document.createElement('div');

    usersList!.innerHTML = '';
    usersListBlock.classList.add('users-list-block');

    return fetch('http://localhost:8081/get-all-users')
        .then((response) => response.json())
        .then((response) => {
            usersList?.append(createSearchInput());
            usersList?.append(usersListBlock);

            return response;
        })
        .then((response) => {
            return response.data.forEach((e: any) => {
                usersListBlock?.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                        <div>
                            <li>name: ${e.name}, age: ${e.age}</li>
                            <li>id: ${e._id}</li>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-success button-change-user" data-bs-toggle="modal" data-bs-target="#changeusermodal" data-userid="${e._id}">
                                <i class="bi bi-pencil-fill"></i>
                            </button>

                            <button type="button" class="btn btn-outline-danger button-delete-user" data-userid="${e._id}">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                `
                );
            });
        })
        .then(() => {
            const buttonDeleteUser = document.querySelectorAll(
                '.button-delete-user'
            );
            const buttonChangeUser = document.querySelectorAll(
                '.button-change-user'
            );

            buttonDeleteUser.forEach((button) => {
                button.addEventListener('click', (e: Event) => {
                    const targetUser = e.currentTarget as HTMLButtonElement;

                    deleteUser(targetUser.dataset.userid as string);
                });
            });

            buttonChangeUser.forEach((button) => {
                button.addEventListener('click', (e: Event) => {
                    const targetUser = e.currentTarget as HTMLButtonElement;

                    getChangeUserId(targetUser.dataset.userid as string);
                });
            });
        });
}
