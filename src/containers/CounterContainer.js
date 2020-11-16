import React from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, resetAction, sendAction } from '../actions/conter';
import Counter from '../components/Counter/counter'


const CounterContainer = ({ count, increment, decrement, reset, send, saved }) => (
    <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        send={send}
        saved={saved}
    />
)

const mapStateToProps = (state) => ({
    count: state.counter.count,
    saved: state.counter.savedData
})

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(incrementAction()),
        decrement: () => dispatch(decrementAction()),
        reset: () => dispatch(resetAction()),
        send: (data) => dispatch(sendAction(data)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)