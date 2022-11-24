import { createNewUser } from '../../module/createUser/createNewUser';
import { checkingUsersDisplay } from '../../module/showUsers/checkingUsersDisplay';

export function modalAddUser() {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div class="modal fade" id="addnewuser" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-dark">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input id='newUserName' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
                            <input id='newUserAge' type="number" min="0" max="120" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary modal-close" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger send-new-user-data" data-bs-dismiss="modal">Add user</button>
                    </div>
                </div>
            </div>
        </div>
    `
    );

    const sendNewUserData = document.querySelector('.send-new-user-data');
    const inputName: HTMLInputElement | null =
        document.querySelector('#newUserName');
    const inputAge: HTMLInputElement | null =
        document.querySelector('#newUserAge');
    const modalCloseButton = document.querySelector('.modal-close');
    type newUserObject = {
        name: string;
        age: number;
    };
    const newUserData: newUserObject = {
        name: '',
        age: 0,
    };

    sendNewUserData?.addEventListener('click', async () => {
        newUserData!.name = inputName!.value;
        newUserData!.age = Number(inputAge!.value);

        await createNewUser(newUserData);

        inputName!.value = '';
        inputAge!.value = '';

        checkingUsersDisplay();
    });

    modalCloseButton?.addEventListener('click', () => {
        inputName!.value = '';
        inputAge!.value = '';
    });
}
