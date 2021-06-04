import React, { useContext } from "react"
import SaveIcon from "@material-ui/icons/Save"
import { Tooltip } from "@material-ui/core"
import { IconButton, Link } from "gatsby-theme-material-ui"
import Flags from "../../../jacdac-ts/src/jdom/flags"
import { WorkspaceJSON } from "./jsongenerator"
import { VMProgram } from "../../../jacdac-ts/src/vm/VMir"
import ImportButton from "../ImportButton"
import AppContext from "../AppContext"
import { WorkspaceSvg, Xml } from "blockly"
export interface VMFile {
    xml: string
    name?: string
    source?: WorkspaceJSON
    program?: VMProgram
}

export function VMLoadButton(props: { workspace: WorkspaceSvg }) {
    const { workspace } = props
    const { setError } = useContext(AppContext)
    const disabled = !workspace

    const handleFiles = async (files: File[]) => {
        const file = files?.[0]
        if (!file) return

        try {
            const text = await file.text()
            const jsfile = JSON.parse(text)
            console.debug(`imported file`, jsfile)
            const xml = jsfile?.xml
            if (typeof xml !== "string") throw new Error("Invalid file format")

            // try loading xml into a dummy blockly workspace
            const dom = Xml.textToDom(xml)

            // all good, load in workspace
            workspace.clear()
            Xml.domToWorkspace(dom, workspace)
        } catch (e) {
            setError(e)
        }
    }
    return (
        <ImportButton
            text="Open..."
            icon={true}
            disabled={disabled}
            acceptedFiles={["application/json"]}
            onFilesUploaded={handleFiles}
            filesLimit={1}
        />
    )
}

export function VMSaveButton(props: {
    xml: string
    source: WorkspaceJSON
    program: VMProgram
}) {
    const { xml, source, program } = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const json: VMFile = {
        xml,
    }
    if (Flags.diagnostics) {
        json.source = source
        json.program = program
    }

    const url = `data:application/json;charset=UTF-8,${encodeURIComponent(
        JSON.stringify(json)
    )}`

    return (
        <Link download="jacdac-blocks.json" href={url}>
            <Tooltip title={"Save"}>
                <IconButton>
                    <SaveIcon />
                </IconButton>
            </Tooltip>
        </Link>
    )
}
