import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Categories from "./Categories";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Cart from "./Cart"

const Navbar = () => {
    return (
        <BrowserRouter>
            <nav>
                <h1>nostalgi*A*</h1>
                <p>past meets present</p>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/"/>
                <Route path="/categories" element={<Categories />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;