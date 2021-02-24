const targetUnit = require('./handler.js');

describe('Mocking callbacks', () => {

    test('event defined => callback called with response 200', () => {
        const event = {}
        const myMockedCallback = jest.fn();
        targetUnit.myHandler(event, myMockedCallback)
        const expectedOutcome = {
               "message": "Hello",
               "status": 200,
             }
        expect(myMockedCallback).toHaveBeenCalledWith(expectedOutcome);

    });

    test('event undefined => response 500,callback called once', () => {
        const event = {}
        const myMockedCallback = jest.fn()
        targetUnit.myHandler(event, myMockedCallback)
        const expectedOutcome = {
            "message": "Call your admin",
            "status": 500,
        }
        expect(myMockedCallback).toHaveBeenCalledWith(expectedOutcome);
        expect(myMockedCallback).toHaveBeenCalledTimes(1)
    });
});
