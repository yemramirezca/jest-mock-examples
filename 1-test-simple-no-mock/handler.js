exports.myHandler = (event) => {
    if (event) {
        const response = { status: 200, message: "Hello"}
        return response;
    }
    const error = { status: 500, message: "Call your admin"}
    return error;
}