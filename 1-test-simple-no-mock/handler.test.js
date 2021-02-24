const targetUnit = require('./handler.js');

describe('Simple test without mocking', () => {

    test('event defined => response 200', () => {
        const event = {}
        const actualOutcome = targetUnit.myHandler(event)
        const expectedOutcome = {
            "message": "Hello",
            "status": 200,
        }
        expect(actualOutcome).toEqual(expectedOutcome);
        expect(actualOutcome).toBe(expectedOutcome);

    });

    test('event undefined => response 500', () => {
        const event = undefined
        const actualOutcome =  targetUnit.myHandler(event)
        const expectedOutcome = {
            "message": "Call your admin",
            "status": 500,
        }
        expect(actualOutcome).toEqual(expectedOutcome);
    });
});
