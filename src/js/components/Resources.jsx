import React from 'react';
import PropTypes from 'prop-types';

import ResourceBox from '../components/ResourceBox'
import Overlay from '../components/Overlay'

class Resources extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isLocked } = this.props;
        return (
            <div className="resources column small-12 medium-6">
                <Overlay active={isLocked}>
                    Locked!
                </Overlay>
                <div className="row">
                    <ResourceBox isLocked={isLocked} >
                        <h2>React Child 1</h2>
                        <p>React Child 2</p>
                    </ResourceBox>
                </div>
            </div>
        );

    }
}

export default Resources;


Resources.propTypes = {
    isLocked: PropTypes.bool
};