import React, { Component } from 'react';

import Header from '../../components/Order/Order';

class Home extends Component {
   
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