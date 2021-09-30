const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const approvedStations = [];
  for (const station of stations) {
    const buildingType = station[2];
    //variable to check building type
    if (buildingType === 'school' || buildingType === 'community centre') {
      //check if building is a school or community center
      const capacity = station[1];
      if (capacity >= 20) {
        //check if building has 20 or more capacity
        approvedStations.push(station[0]);
        //add array[#] entity 0 to a new array of approved stations
      }
    }
  }
  return approvedStations;
}

console.log(chooseStations(stations));


/*
function should take an array and check the building type.
If it is a school or community center it will then check the capacity.
If the capacity is equal to or more than 20, it will push the building name into a new array of approved stations.
 */

