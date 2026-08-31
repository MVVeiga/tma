const globalGeo = {
    dLength:  Math.PI / 180, // 1 Degree Length
    eRadius: 6378137.0, // WGS84 constants for Earth
    pRadius: 6356752.3142, // WGS84 constants for Earth
    get eSq() {return (Math.pow(this.eRadius, 2) - Math.pow(this.pRadius, 2)) / Math.pow(this.eRadius, 2)}, // Ellipsoid flattening calculations
    latDegreeLength: function(lat) {
        // Radius of curvature in the prime meridian (M)
        const mRadius = (this.eRadius * (1 - this.eSq)) / Math.pow(1 - this.eSq * Math.pow(Math.sin(lat * this.dLength), 2), 1.5);
        return mRadius * this.dLength // // Convert radian length to 1 degree
       },  //
    lonDegreeLength: function(lat) {
        // Radius of curvature in the prime vertical (N)
        const vRadius = this.eRadius / Math.sqrt(1 - this.eSq * Math.pow(Math.sin(lat * this.dLength), 2));
        return vRadius * Math.cos(lat * this.dLength) * this.dLength  // Convert radian length to 1 degree
   },
   M2Km(len) { return len / 1000},
   Km2Mi(len) {return len * 0.621371},
}
