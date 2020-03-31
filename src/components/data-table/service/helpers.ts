import { ColumnType } from "../../../types/page";

export type MappedItem = {
    value: string | number,
    elem?: string
}

export const mapData = (columns: Array<ColumnType>, item: any): Array<MappedItem> => {
    return columns.map((column: ColumnType) => {
        return {
            value: item[column.key],
            elem: column.element
        }
    })
};
