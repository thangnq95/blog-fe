import React, { Component } from 'react';

import Order from '../../components/Order/Order';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
   
    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order key={order.id} ingredients={order.ingredients} price={order.price} />
                )}
            </div>
        );
    };
}

export default Home;