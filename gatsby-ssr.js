import React from "react";

export const wrapPageElement = ({ element, props }) => {
    return <div {...props}>{element}</div>
}

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
}
