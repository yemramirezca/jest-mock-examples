let targetUnit = require('./handler.js');
describe('Mocking returned value', () => {

    beforeEach(() => {
        jest.resetModules();
    });

    test('event defined => response 200', async () => {
        jest.doMock('./greet.js', () => {
            const originalModule = jest.requireActual('./greet.js');
            return {
                ...originalModule,
                timeOfDay: () => "Good evening",
            };
        });
        const  mockedGreet = require('./greet')
        targetUnit = require('./handler.js');
        const event = {};
        const actualOutcome = await targetUnit.myHandler(event)
        const expectedOutcome = {
               "message": "Good evening Leanne Graham",
               "status": 200,
             }
        expect(actualOutcome).toEqual(expectedOutcome);

    });

    test('event defined 2 => response 200', async () => {

        jest.doMock('./greet.js', () => {
            const originalModule = jest.requireActual('./greet.js');
            return {
                getProfileName: () => "TechPhantom",
                timeOfDay: () => "Good evening",
            };
        });
        const  mockedGreet = require('./greet')
        targetUnit = require('./handler.js');
        const event = {};
        const actualOutcome = await targetUnit.myHandler(event)
        const expectedOutcome = {
            "message": "Good evening TechPhantom",
            "status": 200,
        }
        expect(actualOutcome).toEqual(expectedOutcome);

    });
});
