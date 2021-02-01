// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, functionOptions) {
    return functionOptions(drivers)
}