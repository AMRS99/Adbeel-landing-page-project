import React from "react";

import Card from "./Card"

const CardRow = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default CardRow;