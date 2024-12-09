import React from "react";

export const wrapPageElement = ({ element, props }) => (
    <>
    {element}
    </>)

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
}
