import { clearSearchValue } from '../../module/clearSearchValue/clearSearchValue';
import { showSearchUsers } from '../../module/showUsers/showSearchUsers';

export const createSearchInput = function () {
    const search = document.createElement('div');
    search.classList.add('search');
    search.insertAdjacentHTML(
        'beforeend',
        `
        <div class="input-group mb-3">
            <input type="text" placeholder="search name" class="form-control search-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            <button type="button" class="btn btn-danger button-clear-search-input"><i class="bi bi-x-circle"></i></button>
        </div>
    `
    );

    const searchInput: HTMLInputElement | null =
        search.querySelector('.search-input');
    const buttonClearSearchInput = search.querySelector(
        '.button-clear-search-input'
    );

    searchInput?.addEventListener('keyup', () => {
        showSearchUsers(searchInput.value);
    });
    buttonClearSearchInput?.addEventListener('click', clearSearchValue);

    return search;
};
