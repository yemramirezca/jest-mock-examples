exports.myHandler = (event, callback) => {
    if (event) {
        const response = { status: 200, message: "Hello"}
        callback(response);
    }
    const error = { status: 500, message: "Call your admin"}
    callback(error);
}