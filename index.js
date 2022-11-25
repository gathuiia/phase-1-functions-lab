// Code your solution in this file!

const hq = 42; //location of Scuber headquarters
const unitFeet = 264; //1 block in Manhattan is 264ft

function distanceFromHqInBlocks(street){
    let distBlocks = Math.abs(hq - street);
    return distBlocks;    
}

function distanceFromHqInFeet(street){
    let distFeet = distanceFromHqInBlocks(street) * unitFeet;
    return distFeet;
}

function distanceTravelledInFeet(start, destination){
    let distTravelled = Math.abs((start - destination) * unitFeet);
    return distTravelled

}

function calculatesFarePrice(start, destination){
    let distCalc = Math.abs((start - destination) * unitFeet);
    let farePrice

    if(distCalc <= 400){
        farePrice = 0;
        return farePrice;
    }
    else if(distCalc > 400 && distCalc <= 2000){
        farePrice = (distCalc - 400) * 0.02;
        return farePrice;
    }
    else if (distCalc > 2000 && distCalc <= 2500){
        farePrice = 25;
        return farePrice;
    }
    else if (distCalc > 2500){
        farePrice = "cannot travel that far";
        return farePrice;
    }
}