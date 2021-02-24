const fetch = require('node-fetch');

exports.greetMessage = async () => {
    const profile = await getProfile()
    const name = profile.name
    return `Hello ${name}`
}

async function getProfile() {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const response = await fetch(url);
    if (response.status === 200) {
        const json = await response.json();
        return json
    } else {
        return null;
    }
}