/*
- build a stop light
    - 4 lights; red, yellow, green and white
    - 4 types of vehicles
        - human powered ( bicycle ) 
            - can ONLY go if light is green
        - personal/private transportation ( private )
            - can ONLY go if light is green or yellow
            - must slow down to 20mph at yellow light
        - public transportation ( public )
            - can only go if light is white
            - no need to slow down
        - emergency vehicles ( emergency )
            - can go on any light
            - must slow down to 30 mph at yellow and white lights
            - must slow down to 20 mph at red lights
*/

/* starter code */
const VEHICLE_TYPES = {
    bicycle: 'bicycle',
    privateVehicle: 'private',
    publicVehicle: 'public',
    emergencyVehicle: 'emergency'
}

const LIGHTS = {
    white: 'white',
    green: 'green',
    yellow: 'yellow',
    red: 'red'
}

stopLight = ( vehicleType, speed, lightColor) => {


    if (vehicleType === VEHICLE_TYPES.bicycle) {
        if(lightColor !== LIGHTS.green) {
            speed = 0;
    }
}
    if (vehicleType === VEHICLE_TYPES.privateVehicle) {
        if (lightColor === LIGHTS.yellow) {
            speed = 20;
        }
        if (lightColor === LIGHTS.red) {
            speed = 0;
        }
    } 
    if (vehicleType === VEHICLE_TYPES.publicVehicle) {
        if (lightColor !== LIGHTS.white)
        speed = 0;
    }
    if (vehicleType === VEHICLE_TYPES.emergencyVehicle) {
        if (lightColor === LIGHTS.white || LIGHTS.yellow) {
            speed = 30;
        }
        if (lightColor === LIGHTS.red) {
            speed = 20;
        }
    }

    return speed; 
}

if ( stopLight( VEHICLE_TYPES.bicycle, 20, LIGHTS.white)  !== 0 )
    console.log("bicycle 20 white failed")

if ( stopLight( VEHICLE_TYPES.privateVehicle, 40, LIGHTS.yellow) !== 20 )
    console.log("private 40 yellow failed")

if ( stopLight( VEHICLE_TYPES.emergencyVehicle, 60, LIGHTS.red) !== 20 )
    console.log("emergency 60 red failed")

if ( stopLight( VEHICLE_TYPES.publicVehicle, 15, LIGHTS.yellow) !== 0 )
    console.log("public 15 yellow failed")