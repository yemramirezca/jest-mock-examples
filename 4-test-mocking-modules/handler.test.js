let targetUnit = require('./handler.js');

jest.mock('node-fetch');  //Full mock
const  mockedFetch = require('node-fetch');

describe('Mocking returned value', () => {
    test('event defined => response 200', async () => {
        const event = {};
        mockedFetch.mockReturnValue(Promise.resolve({
            status: 200,
            json: () => ({name: "TechPhantom"}),
        }));
        const actualOutcome = await targetUnit.myHandler(event)
        const expectedOutcome = {
               "message": "Hello TechPhantom",
               "status": 200,
             }
        expect(actualOutcome).toEqual(expectedOutcome);

    });
});
