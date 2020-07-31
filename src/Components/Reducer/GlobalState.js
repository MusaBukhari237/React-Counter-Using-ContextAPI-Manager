
function ReducerState(state, action) {
    switch (action) {
      case 'Add':
        return state + 1;
      case 'Minus':
        return state - 1;
      default:
        return state + 2;

    };

  };

export default ReducerState;
