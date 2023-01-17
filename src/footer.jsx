import React from "react";

function footer(){
    const date = new Date();
    const year =date.getFullYear();
    return <p className="foot">Copyright ©{year}</p>
}
export default footer;
// eslint-disable-next-line