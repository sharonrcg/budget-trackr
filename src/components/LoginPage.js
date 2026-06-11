import React from "react";
import { connect } from "react-redux";
import { startLogin, startDemoLogin } from "../actions/auth";

export const LoginPage = ({ startLogin, startDemoLogin, history }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__header">budget trackr</h1>
            <p>Keep track of your spending.</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
            <button className="button button__secondary" onClick={() => { startDemoLogin(); history.push('/dashboard'); }}>Try Demo</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startDemoLogin: () => dispatch(startDemoLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
