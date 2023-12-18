function speedSystem (speed) {
    const speedLimit = 70;

    const demeritPointPerKm = 5;

    if (speed<=speedLimit) {
        return "Okay";
    }
    else {
      const demeritPoints = Math.abs((speed - speedLimit) / demeritPointPerKm); 
    if (demeritPoints<=12) {
        return ("Points:" + demeritPoints)
    }
     else  {
        return ("License suspended");
    }   
}
}
console.log(speedSystem(180))

