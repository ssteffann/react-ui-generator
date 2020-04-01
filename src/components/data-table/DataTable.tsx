import React, {useState, useEffect} from 'react'
import {getData} from "./service/api";
import {mapData, MappedItem} from "./service/helpers";
import getComponent from './components'
import Spinner from "../spinner/Spinner";
import {TableType, ColumnType} from "../../types/page";

type Props = {
    tableData: TableType
}

const DataTable = ({tableData}: Props) => {
    const {apiEndpoint, columns} = tableData;
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const response = await getData(apiEndpoint);

            setData(response);
            setLoading(false);
        };

        fetchData();
    }, [apiEndpoint]);

    return (<div className='card'>
        <div className='card-body'>
            <table className='table'>
                <thead className='thead-dark'>
                <tr>
                    {columns.map((column: ColumnType) => {
                        return (<th key={column.key}>{column.title}</th>);
                    })}
                </tr>
                </thead>

                <tbody>
                {data.map((item: any, index: number) => {
                    const cells = mapData(columns, item);

                    return (<tr key={index}>
                        { cells.map((cell: MappedItem, ind: number) => {
                            const Component = getComponent(cell.elem || '');

                            return (<td key={ind}><Component value={cell.value} /></td>)
                        })}
                    </tr>);
                })}
                </tbody>

            </table>
            { isLoading &&<div className='d-flex justify-content-center p-5'> <Spinner/> </div> }
        </div>
    </div>);
};

DataTable.displayName = 'DataTable';

export default DataTable;
