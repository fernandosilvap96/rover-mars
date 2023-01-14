import RoverModel from '../../models/RoverModel';

export class RoverRepository {
    instructions: any[];

    landingPosition: {
        x: number;
        y: number;
    };

    lastPosition: {
        x: number;
        y: number;
    };

    constructor() {
        this.instructions = [];
        this.lastPosition = { x: 0, y: 0 };
        this.landingPosition = { x: 0, y: 0 };
    }

    async save(data: Log): Promise<any> {
        console.log(data);
        const operation = await RoverModel.create(data);
        return operation;
    }

    addInstructionToLog(data: any): void {
        this.instructions.push(data);
    }

    getInstructions(): any {
        return this.instructions;
    }

    setlastPosition(x: number, y: number): void {
        this.lastPosition.x = x;
        this.lastPosition.y = y;
    }

    getLastPosition(): any {
        return this.lastPosition;
    }

    setLandingPosition(x: number, y: number): void {
        this.landingPosition.x = x;
        this.landingPosition.y = y;
    }

    getLandingPosition(): any {
        return this.landingPosition;
    }
}

export type Log = {
    instructions: any[];
    landingPosition: {
        x: number;
        y: number;
    };
    lastPosition: {
        x: number;
        y: number;
    };
};
