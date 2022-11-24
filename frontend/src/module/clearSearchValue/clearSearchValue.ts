import { showUsers } from '../showUsers/showUsers';

export async function clearSearchValue() {
    const searchInput: HTMLInputElement | null =
        document.querySelector('.search-input');

    searchInput!.value = '';

    await showUsers();

    const resetSearchInput: HTMLInputElement | null =
        document.body.querySelector('.search-input');

    resetSearchInput?.focus();
}
