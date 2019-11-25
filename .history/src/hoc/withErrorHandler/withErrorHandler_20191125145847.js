import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler =  (WrapComponent, axios) => {
    return class extends Component {
        
        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapComponent {...this.props} />
                </Aux>
            );
        }
    }

}

export default withErrorHandler;
