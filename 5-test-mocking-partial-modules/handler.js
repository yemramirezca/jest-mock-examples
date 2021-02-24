const greet = require('./greet');
exports.myHandler = async(event) => {
    if (event) {
        const name = await greet.getProfileName()
        const timeOfTheDay = greet.timeOfDay()
        const message =  `${timeOfTheDay} ${name}`
        return response = { status: 200, message: message}
    }
    const error = { status: 500, message: "Call your admin"}
    return error;
}