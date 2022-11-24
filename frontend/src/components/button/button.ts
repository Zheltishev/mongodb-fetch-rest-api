export function createButton(data: any) {
    const button = document.createElement('button');

    button.classList.add(
        'btn',
        'btn-danger',
        data.title.replace(/\s/g, '').toLowerCase()
    );
    button.textContent = data.title;

    if (!data.withModal) {
        return button;
    }

    button.dataset.bsToggle = 'modal';
    button.dataset.bsTarget = `#${data.title.replace(/\s/g, '')}`;
    button.type = 'button';

    return button;
}
