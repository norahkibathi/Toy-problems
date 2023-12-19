//the function calculate the speed system.
//70 has been set as the speedlimit thus used as the baseline 
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

