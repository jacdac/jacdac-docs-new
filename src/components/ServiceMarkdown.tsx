import React from "react"
import Markdown from "./ui/Markdown"
import ServiceSpecificationStatusAlert from "./specification/ServiceSpecificationStatusAlert"
import { Button, Link } from "gatsby-theme-material-ui"
import DeviceSpecificationList from "./specification/DeviceSpecificationList"
import { serviceSpecificationFromClassIdentifier } from "../../jacdac-ts/src/jdom/spec"
import { Grid } from "@mui/material"
import MakeCodeIcon from "./icons/MakeCodeIcon"

function ServiceButtons(props: {
    service: jdspec.ServiceSpec
    makecodeSlug?: string
}) {
    const { service, makecodeSlug } = props
    const { shortId } = service

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button
                    variant="contained"
                    to={`/services/${shortId}/playground/`}
                >
                    Playground
                </Button>
            </Grid>
            <Grid item>
                <Button
                    color="secondary"
                    variant="contained"
                    to={`/tools/device-tester/`}
                >
                    Test
                </Button>
            </Grid>
            {makecodeSlug && (
                <Grid item>
                    <Button
                        color="secondary"
                        variant="contained"
                        to={makecodeSlug}
                        startIcon={<MakeCodeIcon />}
                    >
                        MakeCode
                    </Button>
                </Grid>
            )}
        </Grid>
    )
}

export default function ServiceMarkdown(props: {
    classIdentifier: number
    source: string
    makecodeSlug?: string
}) {
    const { classIdentifier, source, makecodeSlug } = props
    const service = serviceSpecificationFromClassIdentifier(classIdentifier)
    const { shortId } = service

    return (
        <>
            <ServiceSpecificationStatusAlert specification={service} />
            <Markdown source={source} />
            {service && (
                <ServiceButtons service={service} makecodeSlug={makecodeSlug} />
            )}

            <DeviceSpecificationList
                header={<h2>Devices</h2>}
                buyNow={true}
                serviceClass={classIdentifier}
            />

            <h2> See Also</h2>
            <ul>
                <li>
                    <a
                        href={`https://github.com/jacdac/jacdac/blob/main/services/${shortId}.md`}
                    >
                        View source
                    </a>
                </li>
                <li>
                    Read{" "}
                    <Link
                        to="/reference/service-specification/"
                        underline="hover"
                    >
                        Service Specification Language
                    </Link>{" "}
                    reference
                </li>
            </ul>
        </>
    )
}
