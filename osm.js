/**
 * Calculates the bearing (angle relative to North) between two geographic points.
 * @param {number} lat1 - Latitude of the starting point in degrees.
 * @param {number} lon1 - Longitude of the starting point in degrees.
 * @param {number} lat2 - Latitude of the destination point in degrees.
 * @param {number} lon2 - Longitude of the destination point in degrees.
 * @returns {number} The angle in degrees from True North (0° to 360°, clockwise).
 */
function calculateBearing(lat1, lon1, lat2, lon2) {
    // Convert degrees to radians
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const toDegrees = (radian) => (radian * 180) / Math.PI;

    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δλ = toRadians(lon2 - lon1);

    // Calculate the components of the bearing vector
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);

    // Calculate the angle using atan2
    let bearing = toDegrees(Math.atan2(y, x));

    // Normalize the angle to a 0° - 360° compass bearing
    bearing = (bearing + 360) % 360;

    return bearing;
}

// ==========================================
// Example Usage:
// ==========================================

// Point A: New York City (40.7128° N, -74.0060° E)
//const startLat = -18.912517; //40.7128;
//const startLon = -48.321821;

// Point B: London (51.5074° N, -0.1278° E)
const destLat = -18.912498; //51.5074
const destLon = 	-48.321716; // -0.1278;
const startLat = -18.912239374526973
const startLon = -48.3205365701842

const angleFromNorth = - calculateBearing(startLat, startLon, destLat, destLon);

console.log(`The angle from True North to the destination is: ${angleFromNorth.toFixed(2)}°`);


// Expected Output: Approximately 51.39° (North-East direction)
function map(elId,lat,lon ) {
   function lon2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
   function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }
   let zoom = 18
//let lat = -18.912552318723233
//let lon = -48.32174021562454
//let lat = -18.911969120327626
//let lon = -48.31966990136388
//  -18.912552318723233, -48.32174021562454,-18.912552318723233


  let img = document.getElementById(elId)
  img.src = `https://tile.openstreetmap.org/${zoom}/${lon2tile(lon,zoom)}/${lat2tile(lat,zoom)}.png`
  console.log(img.src)
  img.style.transform=`rotate(${angleFromNorth}deg)`
}
map("img", -18.912552318723233, -48.32174021562454 )
