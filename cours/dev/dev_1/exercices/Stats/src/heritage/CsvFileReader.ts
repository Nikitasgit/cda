import fs from "fs";

export abstract class CsvFileReader<T> {
  private readonly filename: string;
  public data: T[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }
  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((line: string) => line.split(","))
      .map(this.mapRow);
  }

  abstract mapRow(line: string[]): T;
}
