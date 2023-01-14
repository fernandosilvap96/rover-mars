import { RoverRepository } from '../repositories/mongo/RoverRepository';
import { Plateau } from './Plateau';

export class Rover {
    x: number;

    y: number;

    orientation: string;

    plateau: Plateau;

    roverRepository: RoverRepository;

    constructor(
        x: number,
        y: number,
        orientation: string,
        plateau: Plateau,
        roverRepository: RoverRepository
    ) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.plateau = plateau;
        this.roverRepository = roverRepository;
        this.roverRepository.setLandingPosition(x, y);
    }

    move(instructions: any): void {
        for (let i = 0; i < instructions.length; i += 1) {
            console.log('instrução', instructions[i]);
            if (instructions[i] === 'L') {
                this.roverRepository.addInstructionToLog(instructions[i]);
                this.roverRepository.setlastPosition(this.x, this.y);
                this.turnLeft();
            }
            if (instructions[i] === 'R') {
                this.roverRepository.addInstructionToLog(instructions[i]);
                this.roverRepository.setlastPosition(this.x, this.y);
                this.turnRight();
            }
            if (instructions[i] === 'M') {
                this.roverRepository.addInstructionToLog(instructions[i]);
                this.roverRepository.setlastPosition(this.x, this.y);
                this.forward();
            }
        }
    }

    private turnLeft(): void {
        if (this.orientation === 'N') {
            this.orientation = 'W';
        }
        if (this.orientation === 'W') {
            this.orientation = 'S';
        }
        if (this.orientation === 'S') {
            this.orientation = 'E';
        }
        if (this.orientation === 'E') {
            this.orientation = 'N';
        }
    }

    private turnRight() {
        if (this.orientation === 'N') {
            this.orientation = 'E';
        }
        if (this.orientation === 'E') {
            this.orientation = 'S';
        }
        if (this.orientation === 'S') {
            this.orientation = 'W';
        }
        if (this.orientation === 'W') {
            this.orientation = 'N';
        }
    }

    private forward() {
        console.log('chegou no forward');
        if (this.orientation === 'N') {
            if (this.plateau.isValidCoordinate(this.x, this.y + 1)) {
                this.y += 1;
            } else {
                throw new Error('chegou no limite do Plateau');
            }
        }
        if (this.orientation === 'E') {
            if (this.plateau.isValidCoordinate(this.x + 1, this.y)) {
                this.x += 1;
            } else {
                throw new Error('chegou no limite do Plateau');
            }
        }
        if (this.orientation === 'S') {
            if (this.plateau.isValidCoordinate(this.x, this.y - 1)) {
                this.y -= 1;
            } else {
                throw new Error('chegou no limite do Plateau');
            }
        }
        if (this.orientation === 'W') {
            if (this.plateau.isValidCoordinate(this.x - 1, this.y)) {
                this.x -= 1;
            } else {
                throw new Error('chegou no limite do Plateau');
            }
        }
    }
}
