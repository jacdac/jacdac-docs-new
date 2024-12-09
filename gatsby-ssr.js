import React from "react";

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <div {...props}>{element}</div>
}

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
}
