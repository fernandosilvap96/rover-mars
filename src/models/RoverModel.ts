import { Schema, model } from 'mongoose';

const roverSchema = new Schema({
    instructions: { type: Object },
    landingPosition: { type: Object },
    lastPosition: { type: Object },
});

const RoverModel = model('RoverLog', roverSchema);

export default RoverModel;
