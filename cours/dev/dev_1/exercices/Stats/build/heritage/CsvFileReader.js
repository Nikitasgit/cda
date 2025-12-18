import fs from "fs";
export class CsvFileReader {
    filename;
    data = [];
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        this.data = fs
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((line) => line.split(","))
            .map(this.mapRow);
    }
}
//# sourceMappingURL=CsvFileReader.js.map