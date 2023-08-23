import React from "react";

const MyPragraph = (props) => {
    console.log("RUNNING MyPragraph")
    return <p>{props.children}</p>;
};

export default MyPragraph;