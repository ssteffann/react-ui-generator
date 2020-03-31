export type PageType = {
    path: string,
    linkTitle: string,
    pageTitle: string,
    pageDescription: string,
    table: TableType
}

export type TableType = {
    apiEndpoint: string,
    columns: Array<ColumnType>
}

export type ColumnType = {
    title: string,
    key: string,
    element?: string
}
