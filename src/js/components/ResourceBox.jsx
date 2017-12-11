import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../components/Overlay'

class ResourceBox extends React.Component {
    constructor(props) {
        super(props);
    }


    //componentWillReceiveProps(newProps) {}

    render() {
        const {isLocked} = this.props;       
        return (
            <aside className="resource columns small-6 flex-container flex-dir-column">
                <div className="row">
                    <Overlay active={!isLocked}>
                        <span>Unlocked!</span>
                    </Overlay>
                </div>
                <div className="row align-top flex-child-grow">
                    <div className="column small-12 text-center">
                        {this.props.children}
                    </div>
                </div>
            </aside>
        );

    }
}

export default ResourceBox;

ResourceBox.propTypes = {
    resourceName: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLocked: PropTypes.bool,
    resources: PropTypes.object.isRequired
};

