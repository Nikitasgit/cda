import { MatchResult } from "./matchResults.js";
import { MatchDataReader } from "./composition/MatchDataReader.js";
import { CsvFileReader } from "./composition/CsvFileReader.js";

const source = new CsvFileReader("./src/football.csv");
const matchReader = new MatchDataReader(source);

matchReader.load();
const matches = matchReader.data;
const manUnitedWins = matches.filter((match: any) => {
  return (
    (match[1] === "Man United" && match[5] === MatchResult.HOMEWIN) ||
    (match[2] === "Man United" && match[5] === MatchResult.AWAYWIN)
  );
});

console.log(manUnitedWins.length);
