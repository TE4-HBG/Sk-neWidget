const fs = require("fs");

/**Array class for route file*/
class Route {
    ID;
    agencyID;
    shortName;
    longName;
    type;
    description;
    constructor(ID,agencyID,shortName,longName,type,description) {
      this.ID = ID;
      this.agencyID = agencyID;
      this.shortName = shortName;
      this.longName = longName;
      this.type = type;
      this.description = description;
    }
    
    static fromString(str) {
      const splitted = str.split(',');
      const route = new Route(
        BigInt(splitted[0]),
        BigInt(splitted[1]),
        splitted[2],
        splitted[3],
        splitted[4],
        splitted[5]
      );
      return route;
    }
  
    static fromFile(path) {
      const strs = fs.readFileSync("routes.txt").toString('utf8').split('\r\n');
      strs.shift();
      strs.pop();
      const routesArr = [];
  
      for (let index = 0; index < strs.length; index++) {
        routesArr[index] = Route.fromString(strs[index]);
      }
      return routesArr;
    }
}

/**Array class for the trips file*/
class Trip {
    routeID;
    serviceID;
    tripID;
    tripHeadSign;
    directionID;
    shapeID;
    constructor(routeID,serviceID,tripID,tripHeadSign,directionID,shapeID) {
      this.routeID = routeID;
      this.serviceID = serviceID;
      this.tripID = tripID;
      this.tripHeadSign = tripHeadSign;
      this.directionID = directionID;
      this.shapeID = shapeID;
    }
  
    static fromString(str) {
      const splitted = str.split(',');
      const trip = new Trip(
        BigInt(splitted[0]),
        splitted[1],
        BigInt(splitted[2]),
        splitted[3],
        splitted[4],
        BigInt(splitted[5])
      );
      return trip;
    }
    static fromFile(path) {
      const strs = fs.readFileSync("trips.txt").toString('utf8').split('\r\n');
      strs.shift();
      strs.pop();
      const tripsArr = [];
  
      for (let index = 0; index < strs.length; index++) {
        tripsArr[index] = Trip.fromString(strs[index]);
      }
      return tripsArr;
    }
}

/**Array class for stoptimes file*/
class StopTimes {
    tripID;
    arrivalTime;
    departureTime;
    stopID;
    stopSequence;
    stopHeadSign;
    pickupType;
    dropoffType;
    shapeDistTraveled;
    timepoint;
    constructor(tripID,arrivalTime,departureTime,stopID,stopSequence,stopHeadSign,pickupType,dropoffType,shapeDistTraveled,timepoint) {
      this.tripID = tripID;
      this.arrivalTime = arrivalTime;
      this.departureTime = departureTime;
      this.stopID = stopID;
      this.stopSequence = stopSequence;
      this.stopHeadSign = stopHeadSign;
      this.pickupType = pickupType;
      this.dropoffType = dropoffType;
      this.shapeDistTraveled = shapeDistTraveled;
      this.timepoint = timepoint;
    }

    static fromString(str) {
      const splitted = str.split(',');
      const stopTimes = new StopTimes(
        BigInt(splitted[0]),
        splitted[1],
        splitted[2],
        BigInt(splitted[3]),
        splitted[4],
        splitted[5],
        splitted[6],
        splitted[7],
        splitted[8],
        splitted[9]
      );
      return stopTimes;
    }
  
    static fromFile(path) {
      const strs = fs.readFileSync("stop_times.txt").toString('utf8').split('\r\n');
      strs.shift();
      strs.pop();
      const timesArr = [];
  
      for (let index = 0; index < strs.length; index++) {
        timesArr[index] = StopTimes.fromString(strs[index]);
      }
      return timesArr;
    }
}

/*Assemble a final class that is used for the display*/
class Journey {
  routeId;
  routeShortName;
  routeLongName;
  type;
  tripId;
  directionId;
  departureTime;
  stopId;
  constructor(routeId, routeShortName, routeLongName,type,  tripId, directionId, departureTime, stopId) {
      this.routeId = routeId;
      this.routeShortName = routeShortName;
      this.routeLongName = routeLongName;
      this.type = type;
      this.tripId = tripId;
      this.directionId = directionId;
      this.departureTime = departureTime;
      this.stopId = stopId;
  }
}

const tripsArr = Trip.fromFile("");
const timesArr = StopTimes.fromFile("");
const routesArr = Route.fromFile("");

var routeID = [
  //Buss routes
  9011012041000000n, //10,Örkelljunga - Helsingborg
  9011012060100000n, //1,HelsingborgsExpressen Dalhem - Råå
  9011012021900000n, //219,Helsingborg - Rydebäck
  9011012022100000n, //221,Höganäs - Helsingborg
  9011012060800000n, //8,Rosengården - Husensjö - Helsingborg C - Sofiero -
  9011012060200000n, //2,Ödåkra/Berga - Helsingborg C - Ättekulla/Råå
  //Train routes
  9011012830300000n, //3,"HELSINGBORG NO 3 Rosenlund, Hässlunda m fl - Påarp"
];

var helsingborgCStops = [
  //All stops for Helsingborg C
  9022012083241001n,
  9022012083241002n,
  9022012083241003n,
  9022012083241004n,
  9022012083241005n,
  9022012083241006n,
  9022012083241007n,
  9022012083241008n,
  9022012083241009n,
  9022012083241010n,
  9022012083241011n,
  9022012083241012n,
  9022012083241013n,
  9022012083241014n,
  9022012083241015n,
  9022012083241016n,
  9022012083241017n,
  9022012083241018n,
  9022012083241019n,
  9022012083241020n,
  9022012083241021n,
  9022012083241022n,
  9022012083241023n,
  9022012083241024n,
  9022012083241025n,
  9022012083241026n,
  9022012083241027n,
  9022012083241028n,
  9022012083241029n,
  9022012083241041n,
  9022012083241042n,
  9022012083241043n,
  9022012083241044n,
  9022012083241045n,
  9022012083241046n,
  9022012083241047n,
  9022012083241048n,
  9022012083241049n
];

let journeys = [];
for (let i = 0; i < routeID.length; i++) {
  
  var givenRoute  = routeID[i];

  var found = routesArr.find(route => route.ID === givenRoute);

  var foundTrips = tripsArr.filter(trip => trip.routeID === found.ID);
  timesArr.forEach(time => {
    for (let stopIndex = 0; stopIndex < helsingborgCStops.length; stopIndex++) {
      if(time.stopID === helsingborgCStops[stopIndex]) {
        for (let tripIndex = 0; tripIndex < foundTrips.length; tripIndex++) {
          if(time.tripID === foundTrips[tripIndex].tripID) {
            journeys.push(new Journey(found.ID, found.shortName, found.longName, found.type, time.tripID, foundTrips[tripIndex].directionID, time.departureTime, time.stopID))
          }
        }
      }
    }
  });
}
/*journeys.sort((a, b) => {
  return a.departureTime - b.departureTime;
})*/
journeys.sort((a, b) => {
  if (a.departureTime < b.departureTime) {
    return -1;
  }
  if (a.departureTime > b.departureTime) {
    return 1;
  }
  return 0;
})

let date = (() => {
  const date = new Date();
  return `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}:${String(date.getSeconds()).padStart(2,'0')}`
})();


let firstJourney;
for (let index = 0; index < journeys.length; index++) {
  if(date >= journeys[index].departureTime) {
    firstJourney = index;
  }
}

let output = [];
for (let index = firstJourney; index < firstJourney + 12; index++) {
  output.push(journeys[index % journeys.length]);
}

console.log(output);

console.log(output[9].routeShortName);
console.log(output[9].routeLongName);
console.log(output[9].type);
console.log(output[9].departureTime);

console.log(date);