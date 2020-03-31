import React from "react";
import DataTable from "../data-table/DataTable";
import {PageType} from "../../types/page";

type Props = {
    pageInfo: PageType
}

const MainContent = ({pageInfo}: Props) => {
    return (<div className='container h-100'>
        <div className='jumbotron'>
            <h1 className='display-5'>
                {pageInfo.pageTitle}
            </h1>

            <p className='lead'>
                {pageInfo.pageDescription}
            </p>
        </div>
        
        <div className='mt-3'>
            <DataTable tableData={pageInfo.table} />
        </div>
    </div>)
};

MainContent.displayName = 'MainContent';

export default MainContent;
