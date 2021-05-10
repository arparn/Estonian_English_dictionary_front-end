import {Translation} from "./translation";

export interface EnglishWord {
  id: number;
  word: string;
  equivalents: Translation[];
}
