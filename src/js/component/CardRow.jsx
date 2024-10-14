import React from "react";

import Card from "./Card"

const CardRow = () => {
    return (
        <>
            <div className="d-flex justify-content-evenly flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default CardRow;