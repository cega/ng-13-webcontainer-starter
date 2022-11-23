import { Tabulator, Options } from 'tabulator-tables';

export interface TabulatorDef {
  table?: Tabulator;
  selector: string;
  options: Options;
  label: string;
}
