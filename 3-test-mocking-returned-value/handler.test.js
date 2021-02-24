let targetUnit = require('./handler.js');
jest.mock('./greet.js')
const greetMock = require('./greet.js');

describe('Mocking returned value', () => {
    test('event defined => response 200', async () => {
        const event = {};
        greetMock.greetMessage = jest.fn().mockReturnValue(`Hello TechPhantom`)
        const actualOutcome = await targetUnit.myHandler(event)
        const expectedOutcome = {
               "message": "Hello TechPhantom",
               "status": 200,
             }
        expect(actualOutcome).toEqual(expectedOutcome);

    });
});
