import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminRegister } from "./Account/AdminRegister/AdminRegister";
import { Errors } from "../Shared/Error/Errors";
import AdminLogin from "./Account/AdminLogin/AdminLogin";

export class Admin extends Component {
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
                        <Route path="/admin-login" element={<AdminLogin />} />
                    </Routes>
                    <Routes>
                        <Route path="/admin-register" element={<AdminRegister />} />
                    </Routes>
                    <Routes>
                        <Route path="/*" element={<Errors />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}