import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return <h1>Test!</h1>
}

const ChordSVG = (
  chordName,
  x,
  y,
  labelColor,
  fontWeight,
  labelWeight,
  showTuning,
  fontFamily,
  fontStyle,
  fontSize = 48,
  height = 300,
  topBarHeight = 100,
  tuningHeight = 100,
  width = 600,
  widthPadding = 100,
  numStrings = 6,
  stringWidth = 5,
  fretHeight = 2,
  bgColor = "white",
  positions = ["x", "3", "2", "0", "1", "0"],
  tuning = ["E", "A", "D", "G", "B", "e"]
) => {
  const totalHeight = height + topBarHeight + tuningHeight
  const totalWidth = width + widthPadding * 2
  const chordProps = {
    numStrings,
    stringWidth,
    fretHeight,
    bgColor,
    height,
    width,
    widthPadding,
    totalHeight,
    totalWidth,
    topBarHeight,
    tuningHeight,
    positions,
    tuning,
    fontSize,
  }

  const viewBox = `0 0 ${totalWidth} ${totalHeight}`

  return (
    <svg
      viewBox={viewBox}
      height={chordProps.height}
      totalHeight={chordProps.totalHeight}
      width={chordProps.width}
      totalWidth={chordProps.totalWidth}
    >
      <ChordGrid {...chordProps}></ChordGrid>
    </svg>
  )
}

const ChordGrid = (props) => {
  const usedFrets = props.positions
    .filter((ele) => !isNaN(parseInt(ele)) && parseInt(ele) != 0)
    .map((x) => parseInt(x))

  const minFret = Math.min(...usedFrets)
  const maxFret = Math.max(...usedFrets)
  const numFrets = maxFret - minFret + 1

  const commonProps = {
    x: props.widthPadding,
    y: props.topBarHeight,
    height: props.height,
    width: props.width,
  }
  return (
    <>
      <rect
        height={props.totalHeight}
        width={props.totalWidth}
        fill={props.bgColor}
      ></rect>
      {minFret === 1 ? (
        <Nut
          x={props.widthPadding}
          y={props.topBarHeight}
          height="10"
          width={props.width}
          fill="black"
        />
      ) : (
        <></>
      )}

      <TopBar
        topBarHeight={props.topBarHeight}
        width={props.width}
        positions={props.positions}
        fontSize={props.fontSize}
      />

      <Strings
        {...commonProps}
        numStrings={props.numStrings}
        stringWidth={props.stringWidth}
      />

      <Frets
        {...commonProps}
        numFrets={numFrets}
        fretHeight={props.fretHeight}
      />

      <StringLabels
        x={10}
        fill="black"
        tuning={props.tuning}
        height={props.totalHeight}
        width={props.width}
        widthPadding={props.widthPadding}
        fontSize={props.fontSize}
      />

      <FingerLabel
        height={props.height}
        width={props.width}
        numFrets={props.numFrets}
        tuning={props.tuning}
        positions={props.positions}
        numStrings={props.numStrings}
      />
    </>
  )
}

const Strings = (props) => {
  const spacing = props.width / (props.numStrings - 1)
  return (
    <g id="strings">
      {[...Array(props.numStrings)].map((x, i) => {
        return (
          <rect
            key={i}
            x={Math.max(0, spacing * i - props.stringWidth) + props.y}
            y={props.y}
            width={props.stringWidth}
            height={props.height}
            fill="black"
          />
        )
      })}
    </g>
  )
}

const Frets = (props) => {
  const spacing = props.height / props.numFrets
  return (
    <g id="frets">
      {[...Array(props.numFrets)].map((x, i) => {
        return (
          <rect
            key={i}
            x={0 + props.x}
            y={spacing * i + props.y}
            width={props.width}
            height={props.fretHeight}
            fill="black"
          ></rect>
        )
      })}
    </g>
  )
}

const Nut = (props) => {
  return (
    <rect
      y={props.y}
      x={props.x}
      id="nut"
      width={props.width}
      height={props.height}
      fill="black"
    />
  )
}

const TopBar = (props) => {
  const spacing = props.width / (props.positions.length - 1)
  return (
    <g id="topbar">
      {props.positions.map((x, i) => {
        if (x === "x" || x == 0)
          return (
            <text
              key={i}
              dominantBaseline="middle"
              textAnchor="middle"
              x={spacing * (i + 1) - props.fontSize / 2}
              y={props.fontSize}
              fontSize={props.fontSize}
            >
              {x}
            </text>
          )
      })}
    </g>
  )
}

const ChordName = () => {}

const StringLabels = (props) => {
  const spacing = props.width / (props.tuning.length - 1)
  return (
    <g id="tuning">
      {props.tuning.map((x, i) => {
        return (
          <text
            key={i}
            dominantBaseline="middle"
            textAnchor="middle"
            x={spacing * (i + 1) - props.fontSize / 2}
            y={props.height - props.fontSize}
            fontSize={props.fontSize}
          >
            {x}
          </text>
        )
      })}
    </g>
  )
}

//
const FingerLabel = (props) => {
  const spacingY = props.height / props.numFrets
  const spacingX = props.width / (props.numStrings - 1)
  return (
    <g id="fretMarkers">
      {props.positions.map((x, i) => {
        console.log("x:", x, "i:", i)

        if (x === "x" || x == 0) return <></>
        else
          return (
            <circle cx={100 + spacingX * i} cy={100 * x + 62} r={20}>
              {}
            </circle>
          )
      })}
    </g>
  )
}

const TopFretLabel = (props) => {}
