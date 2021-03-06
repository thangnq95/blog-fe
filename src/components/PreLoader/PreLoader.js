import React from 'react';

class PreLoader extends React.Component {
    render() {
        return (
            <div id="preloader">
                <div id="loader">
                    <div className="line-scale">
                        <div />
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>

        );
    }
}

export default PreLoader;