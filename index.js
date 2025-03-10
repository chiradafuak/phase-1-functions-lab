// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat rate for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet
    }
}
