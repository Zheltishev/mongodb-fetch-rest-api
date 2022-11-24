import { createButton } from '../button/button';
import { showUsers } from '../../module/showUsers/showUsers';

export function createMain() {
    const row = document.createElement('div');
    const buttonsArray: object[] = [
        { title: 'show all users', withModal: false },
        { title: 'add new user', withModal: true },
    ];

    row.classList.add('main', 'row', 'p-2');
    buttonsArray.forEach((e) => {
        const col = document.createElement('div');

        col.classList.add('col', 'p-2', 'd-flex', 'justify-content-center');
        col.append(createButton(e));
        row.append(col);
    });

    row.querySelector('.showallusers')?.addEventListener('click', showUsers);

    return row;
}
