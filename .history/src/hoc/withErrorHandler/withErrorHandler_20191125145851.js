import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler =  (WrapComponent, axios) => {
    return class extends Component {
        
        render() {
            return (
                <Aux>
                    <WrapComponent {...this.props} />
                </Aux>
            );
        }
    }

}

export default withErrorHandler;
