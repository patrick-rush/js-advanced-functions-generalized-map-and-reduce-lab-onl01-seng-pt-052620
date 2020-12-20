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