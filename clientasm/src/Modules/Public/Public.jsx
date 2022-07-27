import React, { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Login } from "./Account/Login/Login";
import { Register } from "./Account/Register/Register";

export class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/account-login" element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route path="/account-register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}