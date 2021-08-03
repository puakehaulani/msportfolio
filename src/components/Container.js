import React from "react";

function Container(props) {
    return (
        <> <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />
            <span className="attribute">created with &lt;3 by lexijack</span></>
        //https://github.com/puakehaulani
    )
}

export default Container;