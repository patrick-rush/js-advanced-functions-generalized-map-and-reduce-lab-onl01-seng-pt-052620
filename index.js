// Add your functions here
function map(array, callback) {
    let answer = [];
    array.forEach(function (element) {
        answer.push(callback(element))
    })
    return answer
}

function reduce(array, callback, startingValue) {
    let value
    let startingPosition
    if (startingValue) {
        value = startingValue
        startingPosition = 0
    } else {
        value = array[0]
        startingPosition = 1
    }
    let answer
    for (let i = startingPosition; i < array.length; i++) {
        answer = callback(array[i], value)
        value = answer
    }
    return answer
}

// describe("reduce returns a running total when given a starting point", function () {
//     it("reduces correctly", function () {
//         sourceArray = [1, 2, 3]
//         startingPoint = 100
//         expect(reduce(sourceArray, function (e, memo) { return e + memo }, startingPoint)).to.equal(106)
//     })
