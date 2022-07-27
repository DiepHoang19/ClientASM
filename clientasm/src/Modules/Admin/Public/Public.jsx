import React, { Component } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { LoginAdmin } from "./Account/Login/LoginAdmin";

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
                        <Route path="/admin/account-login" element={<LoginAdmin />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}