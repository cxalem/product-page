import React from "react";
import { useState, useEffect } from "react";

const GalleryContext = React.createContext();

const GalleryProvider = (props) => {

    return (
        <GalleryContext.Provider
            value={{ }}
        >
            {props.children}
        </GalleryContext.Provider>
    )
}

export { GalleryContext, GalleryProvider }
