import {Translation} from "./translation";

export interface EstonianWord {
  id: number;
  word: string;
  equivalents: Translation[];
}
