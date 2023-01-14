export class Plateau {
    width: number;

    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    isValidCoordinate(x: number, y: number): boolean {
        if (x >= 0 && x <= this.width && y >= 0 && y <= this.height) {
            return true;
        }
        return false;
    }
}
