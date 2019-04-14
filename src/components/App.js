import React, { Fragment } from "react";

import { Header, Footer } from "../Layouts";

import Exercises from "./Exercises";

export default props => (
    <Fragment>
        <Header />
        <Exercises />
        <Footer />
    </Fragment>
);
