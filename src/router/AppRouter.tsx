import React, {Suspense} from 'react';
import Spinner from "../components/spinner/Spinner";
import {Route, Redirect, RouteComponentProps} from 'react-router-dom';
import {PageType} from "../types/page";
import Layout from "../components/layout/Layout";
import MainContent from "../components/main-content/MainContent";

type Props = {
    pages: Array<PageType>
}

class AppRouter extends React.Component<Props> {
    static displayName: string = 'AppRouter';

    renderRoutes = () => {
        const {pages} = this.props;

        return pages.map((page: PageType) => {
            return (
                <Route
                    key={page.path}
                    path={page.path}
                    render={(props: RouteComponentProps) =>  (<MainContent {...props}  pageInfo={page} />)}
                    exact
                />
            );
        })
    };


    render() {
        const { pages } = this.props;

        return (
            <Layout pages={pages}>
                <Suspense
                    fallback={<Spinner className='position-absolute'
                                       size={3}
                                       style={{top: '50%', left: '45%'}}/>}>
                    <div>
                        {this.renderRoutes()}
                        <Redirect key={'default'} to={pages[0].path}/>
                    </div>
                </Suspense>
            </Layout>);
    }
}

export default AppRouter;
