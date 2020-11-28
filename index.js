// Add your functions here
function map(sourceArray, callback){
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(callback(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, callback, init = 0) {
    let agg = (!!init) ? init : sourceArray[0]
    let i = (!!init) ? 0 : 1
    for (; i < sourceArray.length; i++) {
        agg = callback(sourceArray[i], agg)
    }
    return agg
}