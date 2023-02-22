import React from "react"
import ReactDOM from "react-dom/client"

function App() {
  return <h1>Test!</h1>
}

let ChordSVG = (
  chordName,
  height,
  width,
  x,
  y,
  labelColor,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  labelWeight,
  tuning,
  showTuning,
  numStrings = 6,
  numFrets = 3,
  strokeWidth = 1,
  bgColor = "#fff"
) => {
  console.log(numStrings)
  return (
    <svg height="800pt" width="500pt">
      <chordGrid
        numStrings={numStrings}
        numFrets={numFrets}
        strokeWidth={strokeWidth}
        bgColor={bgColor}
        height={height}
      />
    </svg>
  )
}

const chordGrid = (numStrings, numFrets, strokeWidth, bgColor, height) => {
  return (
    <rect height="800pt" width="500pt" fill={bgColor}>
      {[...Array(numStrings)].map((x, i) => {
        return <String strokeWidth={strokeWidth} key={i} height={height} />
      })}
    </rect>
  )
}

const String = (strokeWidth, height) => {
  return <rect height={height} width={strokeWidth} fill="black"></rect>
}

const nut = () => {}

const topBar = () => {}

const chordName = () => {}

const stringLabels = () => {}

const fingerLabel = () => {}

const topFretLabel = () => {}
