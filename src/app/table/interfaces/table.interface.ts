export interface TableInterface {
  rows: RowItem[];
}

export interface RowItem {
  cells: CellItem[];
}

export interface CellItem {
  value: number | string | boolean;
}

export interface TableConfig {
  headers: HeaderConfig[];
}

export interface HeaderConfig {
  title: string;
  key: string;
}
