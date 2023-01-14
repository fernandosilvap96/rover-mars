import express from 'express';
import mongoose from 'mongoose';

import { Plateau } from './entities/Plateau';
import { Rover } from './entities/Rover';
import { Log, RoverRepository } from './repositories/mongo/RoverRepository';

const app = express();
app.use(express.json());

app.post('/walkingOnMars', async (req: any, res: any) => {
    const input = req.body;

    const { roverData } = input;

    const roverRepository = new RoverRepository();

    try {
        const lines = roverData.split('\n');
        const plateauSize = lines[0].split(' ');
        const plateau = new Plateau(
            parseInt(plateauSize[0], 10),
            parseInt(plateauSize[1], 10)
        );
        if (!plateau.height || !plateau.width) {
            return res.json('input inválido');
        }

        for (let i = 1; i < lines.length; i += 2) {
            const position = lines[i].split(' ');
            const x = parseInt(position[0], 10);
            const y = parseInt(position[1], 10);
            const orientation = position[2];

            const rover = new Rover(
                x,
                y,
                orientation,
                plateau,
                roverRepository
            );
            if (
                !rover.orientation ||
                !rover.x ||
                !rover.y ||
                !rover.roverRepository
            ) {
                return res.json('input inválido');
            }

            try {
                rover.move(lines[i + 1]);
            } catch (error: any) {
                return res.json('chegou no limite do Plateau');
            }
        }

        const instructions = roverRepository.getInstructions();
        console.log('instructions', instructions);
        const lastPosition = roverRepository.getLastPosition();
        const landingPosition = roverRepository.getLandingPosition();
        console.log('lastPosition', lastPosition);
        console.log('landingPosition', landingPosition);

        const log: Log = {
            instructions,
            lastPosition,
            landingPosition,
        };
        roverRepository.save(log);

        return res.json(log);
    } catch (error: any) {
        return res.json('input inválido');
    }
});
app.listen(3000);

const url = 'mongodb+srv://admin:admin@cluster0.tnc0u.mongodb.net/roboMars';
mongoose.connect(url ?? '');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conectado');
});
