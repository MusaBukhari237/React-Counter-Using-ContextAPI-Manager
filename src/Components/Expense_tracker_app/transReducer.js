function TransReducer(state, action) {
    switch (action) {
      case 'Add':
        return state + 1;
      case 'Minus':
        return state - 1;
      default:
        return alert("hello");


    };
  };

export default TransReducer;