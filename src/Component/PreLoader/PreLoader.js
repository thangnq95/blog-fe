import React, { Component } from 'react';

class PreLoader extends React.Component {
    render() {
        return (
            <div id="preloader">
                <div id="loader">
                    <div class="line-scale">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreLoader;