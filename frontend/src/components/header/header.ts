export function createHeader(title: string) {
    const row = document.createElement('div');
    const h1 = document.createElement('h1');

    row.classList.add('header', 'row', 'p-2');
    h1.classList.add('d-flex', 'justify-content-center');
    h1.textContent = title;
    row.append(h1);

    return row;
}
