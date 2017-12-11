import * as actions from '../../actions';

const app = (state = {}, action) => {
  switch(action.type) {

    case actions.app.EXAMPLE_ACTION:
      return {...state, unlocked: !state.unlocked};

    default:
      return state;
  }
};

export default app;