import React from "react";

export const wrapPageElement = e => e

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" })
}
