
const greet = require('./greet.js');

exports.myHandler = async(event) => {
    if (event) {
        const message =  await greet.greetMessage()
        return response = { status: 200, message: message}
    }
    const error = { status: 500, message: "Call your admin"}
    return error;
}

