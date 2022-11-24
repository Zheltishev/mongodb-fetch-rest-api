import { changeUserData } from '../../module/changeUser/changeUserData';
import { checkingUsersDisplay } from '../../module/showUsers/checkingUsersDisplay';

export function modalChangeUser() {
    document.body.insertAdjacentHTML(
        'beforeend',
        `
        <div class="modal fade" id="changeusermodal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-dark">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                            <input id='inputChangeUserName' type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
                            <input id='inputChangeUserAge' type="number" min="0" max="120" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary modal-change-user-close" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger send-change-user-data" data-bs-dismiss="modal">Change user</button>
                    </div>
                </div>
            </div>
        </div>
    `
    );

    const sendChangeUserData = document.querySelector('.send-change-user-data');
    const inputChangeUserName: HTMLInputElement | null = document.querySelector(
        '#inputChangeUserName'
    );
    const inputChangeUserAge: HTMLInputElement | null = document.querySelector(
        '#inputChangeUserAge'
    );
    const modalChangeUserClose = document.querySelector(
        '.modal-change-user-close'
    );
    type changeUserObject = {
        name: string;
        age: number;
    };
    const newDataChangeUser: changeUserObject = {
        name: '',
        age: 0,
    };

    sendChangeUserData?.addEventListener('click', async () => {
        newDataChangeUser!.name = inputChangeUserName!.value;
        newDataChangeUser!.age = Number(inputChangeUserAge!.value);

        await changeUserData(newDataChangeUser);

        //ниже код не выполняется
        inputChangeUserName!.value = '';
        inputChangeUserAge!.value = '';

        checkingUsersDisplay();
    });

    modalChangeUserClose?.addEventListener('click', () => {
        inputChangeUserName!.value = '';
        inputChangeUserAge!.value = '';
    });
}
