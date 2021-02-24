const  fetch = require('node-fetch');

exports.getProfileName = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const response = await fetch(url);
    if (response.status === 200) {
        const json = await response.json();
        return json.name
    } else {
        return null;
    }
}

exports.timeOfDay= () => {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
        return `Good morning`;
    } else if (hour < 17) {
        return `Good afternoon`;
    } else {
        return `Good evening`;
    }
}