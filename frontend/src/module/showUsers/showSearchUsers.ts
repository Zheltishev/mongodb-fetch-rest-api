export function showSearchUsers(inputValue: string) {
    type inputValueObject = {
        data: string;
    };
    const valueFromInput: inputValueObject = {
        data: inputValue,
    };
    const usersListBlock = document.querySelector('.users-list-block');

    usersListBlock!.innerHTML = '';

    fetch('http://localhost:8081/get-search', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(valueFromInput),
    })
        .then((response) => response.json())
        .then((response) => {
            response.data.forEach((obj: any) => {
                const usersListBlock =
                    document.querySelector('.users-list-block');

                usersListBlock?.insertAdjacentHTML(
                    'beforeend',
                    `
                    <div class="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                        <div>
                            <li>name: ${obj.name}, age: ${obj.age}</li>
                            <li>id: ${obj._id}</li>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-success button-change-user" data-bs-toggle="modal" data-bs-target="#changeusermodal" data-userid="${obj._id}">
                                <i class="bi bi-pencil-fill"></i>
                            </button>

                            <button type="button" class="btn btn-outline-danger button-delete-user" data-userid="${obj._id}">
                                <i class="bi bi-trash-fill"></i>
                            </button>
                        </div>
                    </div>
                `
                );
            });
        });
}
