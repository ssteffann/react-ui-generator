import React, {Fragment} from 'react';
import {PageType} from "../../types/page";
import {NavLink} from "react-router-dom";

type Props = {
    pages: Array<PageType>
    children: React.ReactNode,
}

const Layout = ({pages, children}: Props) => {
    return (
        <div className='bg-light vh-100'>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="m-auto navbar-nav">
                    {pages.map((page: PageType) => {
                        return (
                            <li className="nav-item" key={page.path}>
                                <NavLink
                                    to={page.path}
                                    className={'nav-link'}
                                    activeClassName={'active'}>
                                    {page.linkTitle}
                                </NavLink>
                            </li>)
                    })}
                </ul>
            </nav>

            <div className='mt-4'>
                {children}
            </div>
        </div>
    );
};

Layout.displayName = 'GnLayout';

export default Layout;
