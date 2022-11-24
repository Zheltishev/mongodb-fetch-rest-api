type userData = {
    name: string;
    age: number;
};

export async function createNewUser(data: userData) {
    return fetch('http://localhost:8081/post-user', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
}
