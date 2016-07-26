import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';
//class Home extends React.Component {
//    render() {
//        return (
//            <div>
//                <h1>HomePage</h1>
//                <div className="home">
//                    THis Is Home Page
//                </div>
//            </div>
//        );
//    }
//}
const Home = ({ children, routes }) => {
    const depth = routes.length
        return (
            <div>
                <h1>HomePage</h1>

                <div>
                    <aside>
                        <ul>
                            <li><Link to={Products.path}>Products</Link></li>
                            <li><Link to={Orders.path}>Orders</Link></li>
                        </ul>
                    </aside>
                    <main>
                        <ul className="breadcrumbs-list">
                            {routes.map((item, index) =>
                                    <li key={index}>
                                        <Link
                                            onlyActiveOnIndex={true}
                                            activeClassName="breadcrumb-active"
                                            to={item.path || ''}>
                                            {item.component.title}
                                        </Link>
                                        {(index + 1) < depth && '\u2192'}
                                    </li>
                            )}
                        </ul>
                        {children}
                    </main>
                </div>
            </div>
        );
};

Home.title = 'Home';
Home.path = '/';

const Products = () => (
    <div className="Page">
        <h1>Products</h1>
    </div>
)

const Orders = () => (
    <div className="Page">
        <h1>Orders</h1>
    </div>
)

Orders.title = 'Orders';
Orders.path = '/orders';

Products.title = 'Products';
Products.path = '/products';

export {Home, Products, Orders};