import React from 'react';
import {connect} from 'react-redux'
import ReactExample from '../components/ReactExample'
import Resources from '../components/Resources'

import * as actions from '../store/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <section className="row">
                    <ReactExample exampleAction={this.props.exampleAction}/>
                    <Resources isLocked={!this.props.app.unlocked}/>
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        exampleAction: () => {
            dispatch(actions.app.exampleAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);