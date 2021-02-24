const fetch = require('node-fetch');

exports.myHandler = async(event) => {
    if (event) {
        const message =  await greet()
        return response = { status: 200, message: message}
    }
    const error = { status: 500, message: "Call your admin"}
    return error;
}

const greet = async () => {
    const profile = await getProfile()
    const name = profile.name
    return `Hello ${name}`
}

const getProfile = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const response = await fetch(url);
    if (response.status === 200) {
        const json = await response.json();
        return json
    } else {
        return null;
    }
}