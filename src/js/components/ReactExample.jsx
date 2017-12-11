import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class ReactExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        const currentState = { ...this.state };
        currentState.counter++;
        this.setState(currentState);
        window.setTimeout(() => { this.incrementCounter() }, 1000);
    }

    componentDidMount() {
        this.incrementCounter();
    }

    render() {
        const { exampleAction } = this.props;
        const { counter } = this.state;
        return (
            <Fragment>
                <div className="column small-6">
                    Local State Counter: {counter}
                </div>
                <div className="column small-6">
                    <button type="button" onClick={exampleAction} className="button">Perform Action</button>
                </div>
            </Fragment>
        );

    }
}

export default ReactExample;


ReactExample.propTypes = {
    setRegistered: PropTypes.func
};
