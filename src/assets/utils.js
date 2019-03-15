export function distinctCountries(array) {
    return [...new Set(array.map(x => x.country))];
}
/*
object to map
@return map<any, any>
 */
const objectToMap = (obj => {
    const map = new Map();
    Object.keys(obj).forEach(key =>{
        map.set(key, obj[key]);
    });
    return map;
});

/*
  Map to array
 */
function mapToArray(map){
    let ret = [];
    map.forEach((val,key) =>{
        ret.push({
            key: key,
            value: val
        });
    });
    return ret;
}


/*
Object to array
 */
export function objectToArray(object){
    return mapToArray(objectToMap(object));
}


/*
Sort on values
 */
export function compare(a, b) {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();

    let comparison = 0;
    if (valueA > valueB) {
        comparison = 1;
    } else if (valueA < valueB) {
        comparison = -1;
    }
    return comparison;
}



/*
Distance calc
 */
export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1);
    let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c; // Distance in km
    return d;
}

/*
degrees to rad
 */
function deg2rad(deg) {
    return deg * (Math.PI/180)
}
