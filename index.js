function findMatching(drivers, nameOfDriver) {
    return drivers.filter(function(driver){
        return driver.toLowerCase() === nameOfDriver.toLowerCase()    
    })
}

function fuzzyMatch(drivers, nameOfDriver) {
   return drivers.filter(function(driver){
       return driver.slice(0, 2) === nameOfDriver.slice(0,2)
    })
}

function matchName(drivers, nameOfDriver) {
   return drivers.filter(function(driver) {
        return driver.name === nameOfDriver
    } )
}