import React from 'react';
import { connect } from 'react-redux';
import { sendTextAction } from '../actions/main';
import Main from "../components/Main/Main";


const mapStateToProps = (state) => ({
    count: state.counter.count,
    textData: state.main.textData
})

const mapDispatchToProps = dispatch => {
    return {
        sendText: (data) => dispatch(sendTextAction(data)),
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)