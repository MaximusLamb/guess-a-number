// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
function thingy(guess, correctNumber) {
    if (guess > correctNumber) {
        return 1;
    }
}
test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 12;
    const correctNumber = 8;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = thingy(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
