//const drivers=['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase('Bobby') === name.toLowerCase('bobby'));
  }



 function fuzzyMatch(drivers,letters) {
     return drivers.filter(driver=> driver.startsWith(letters))
}

const drivers = [
     {
       name: 'Bobby',
       hometown: 'Pittsburgh' },
     {
       name: 'Sammy',
       hometown: 'New York' } ,
     {
       name: 'Sally',
       hometown: 'Cleveland' },
     {
       name: 'Annette',
       hometown: 'Los Angeles' },
     {
       name: 'Bobby',
       hometown: 'Tampa Bay' }
   ];
  
 function matchName(drivers) {
     return drivers.filter(driver=>driver.name===('Bobby'))
 }

  function matchName(drivers) {
 return drivers.filter(driver=>driver.name===('Bobby'))
 }


 