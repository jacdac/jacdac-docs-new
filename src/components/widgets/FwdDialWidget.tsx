import React from "react"
import useWidgetTheme from "../widgets/useWidgetTheme"
import SvgWidget from "../widgets/SvgWidget"

export default function FwdDialWidget(props: {
  size: string,
  color: "primary" | "secondary",
  position: number,
  angle: number
}) {
  const { size, color, position, angle } = props
  const { background, controlBackground, active, textProps } =
      useWidgetTheme(color)
  const label = `${position}`
  const w = 10
  const r = 0.06
  const fs = Math.max(0.2, 0.4 - label.length * 0.1)

  return <SvgWidget
    title={`rotary encoder at position ${position}`}
    size={size}
    width={w}
    height={w}
    viewBox={"0 0 1 1"}
    >
    <g transform={ `scale(${1 / ( 1 + 117 + 2*15.5 - 2*9.5 + 2*3.25 + 2*(8-3.25))})` }>
      <defs>
        <g id="jacdac-connector" >
          <path fill="#AAA" d="M22.369 14.045H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 12c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.656.173h18.332c.9 0 1.631.712 1.631 1.59v.91c0 .878-.73 1.59-1.631 1.59zM4.124 12c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 12c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077zM4.187 18c0-.404-.167-.791-.464-1.077a1.618 1.618 0 0 0-1.121-.446c-.42 0-.824.16-1.12.446A1.493 1.493 0 0 0 1.016 18c0 .404.167.791.464 1.077.297.285.7.446 1.121.446.42 0 .823-.16 1.12-.446.298-.286.465-.673.465-1.077zm16.157 2.045H4.098a2.692 2.692 0 0 1-2.695.173C.54 19.788 0 18.933 0 18s.54-1.788 1.403-2.218a2.692 2.692 0 0 1 2.695.173h16.246c.915 0 1.656.712 1.656 1.59v.91c0 .878-.741 1.59-1.656 1.59zM24 6.455c0 .878-.73 1.59-1.631 1.59H4.037a2.618 2.618 0 0 1-2.656.173A2.493 2.493 0 0 1 0 6c0-.933.533-1.788 1.381-2.218a2.618 2.618 0 0 1 2.65.168l.006.005h18.332c.9 0 1.631.712 1.631 1.59ZM4.124 6c0-.404-.164-.791-.457-1.077a1.581 1.581 0 0 0-1.104-.446c-.414 0-.811.16-1.104.446A1.504 1.504 0 0 0 1.002 6c0 .404.164.791.457 1.077.293.285.69.446 1.104.446.414 0 .811-.16 1.104-.446.293-.286.457-.673.457-1.077z"/>
        </g>
      </defs>
    <g>
      <path
        fill="white"
        stroke="black"
        strokeWidth="1"
        d="
        M 0.5, 0.5
        m 5.25, 8
        a 8,8 0 0 1 8,-8
        h 117
        a 8,8 0 0 1 8,8
        v 32
        a 4.25,4.25 0 0 1 -4.25,4.25
        h -9.5
        a 4.25,4.25 0 0 0 -4.25,4.25
        v 3
        a 4.25,4.25 0 0 0 4.25,4.25
        h 15.5
        a 3.5,3.5 0 0 1 3.5,3.5
        v 19
        a 3.5,3.5 0 0 1 -3.5,3.5
        h -15.5
        a 4.25,4.25 0 0 0 -4.25,4.25
        v 3
        a 4.25,4.25 0 0 0 4.25,4.25
        h 9.5
        a 4.25,4.25 0 0 1 4.25,4.25
        v 32
        a 8,8 0 0 1 -8,8
        h -117
        a 8,8 0 0 1 -8,-8
        v -32
        a 4.25,4.25 0 0 1 4.25,-4.25
        h 9.5
        a 4.25,4.25 0 0 0 4.25,-4.25
        v -3
        a 4.25,4.25 0 0 0 -4.25,-4.25
        h -15.5
        a 3.5,3.5 0 0 1 -3.5,-3.5
        v -19
        a 3.5,3.5 0 0 1 3.5,-3.5
        h 15.5
        a 4.25,4.25 0 0 0 4.25,-4.25
        v -3
        a 4.25,4.25 0 0 0 -4.25,-4.25
        h -9.5
        a 4.25,4.25 0 0 1 -4.25,-4.25
        v -16.5
        a 4.25,4.25 0 0 0 0,-8.5
        z
      " />
    </g>
      <g transform="translate(125,12)">
        <circle fill="black" r="1.75" />
        <path stroke="black" strokeWidth="1.5" fill="none" d="
          m -2.5 -3
          a 4 4 0 0 0 0 6
          M -4 -4.5
          a 6.25 6.25 0 0 0 0 9
          M 2.5 -3
          a 4 4 0 0 1 0 6
          M 4 -4.5
          a 6.25 6.25 0 0 1 0 9
        " />
      </g>
      <use href="#jacdac-connector" transform="translate(120 60) scale(0.8)" />
      <use href="#jacdac-connector" transform="translate(24 60) translate(0 11) rotate(180) scale(0.8) translate(0 -11) " />
      <text fontFamily="Galano Grotesque Bold" x={16} y={15} fontSize={10}>Dial</text>
    </g>
    <g transform={`translate(0.5 0.5) scale(0.5) rotate(${angle}) translate(-0.5 -0.5)`}>
      <path
        fill={background}
        d="M.67.029a.037.037 0 01-.072-.02A.5.5 0 00.538 0a.037.037 0 01-.075 0 .5.5 0 00-.061.008.038.038 0 01-.073.02.5.5 0 00-.056.025.037.037 0 01-.064.04A.5.5 0 00.16.13.037.037 0 01.11.186a.5.5 0 00-.035.05.037.037 0 01-.035.066.5.5 0 00-.02.058.037.037 0 01-.016.074A.5.5 0 000 .495.037.037 0 01.005.57a.5.5 0 00.013.06.038.038 0 01.025.07.5.5 0 00.028.056.037.037 0 01.043.06.5.5 0 00.042.046.037.037 0 01.058.047.5.5 0 00.053.032.037.037 0 01.069.03.5.5 0 00.059.016.037.037 0 01.074.01.5.5 0 00.062 0 .037.037 0 01.074-.01.5.5 0 00.06-.016.037.037 0 01.068-.03.5.5 0 00.053-.032.037.037 0 01.058-.047.5.5 0 00.042-.045.037.037 0 01.043-.061A.5.5 0 00.957.7.037.037 0 01.982.63.5.5 0 00.995.57.037.037 0 011 .495.5.5 0 00.996.434.038.038 0 01.98.36.5.5 0 00.96.302.037.037 0 01.925.236.5.5 0 00.89.186.037.037 0 01.839.13.5.5 0 00.79.092.037.037 0 01.727.053.5.5 0 00.671.03z"
      />
      <path
        fill={controlBackground}
        d="M.1.499a.4.4 0 10.8 0 .4.4 0 10-.8 0z"
      />
      <circle cx={0.5} cy={0.19} r={r} fill={active} />
    </g>
    <text x={0.5} y={0.5} fontFamily="Galano Grotesque Bold" fontSize={fs} {...textProps}>
      {label}
    </text>
  </SvgWidget>
}
