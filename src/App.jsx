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
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  labelWeight,
  tuning,
  showTuning,
  height = 300,
  width = 600,
  numStrings = 6,
  numFrets = 3,
  stringWidth = 5,
  fretHeight = 2,
  bgColor = "white"
) => {
  const chordProps = {
    numStrings,
    numFrets,
    stringWidth,
    fretHeight,
    bgColor,
    height,
    width,
  }

  const viewBox = `0 0 ${width} ${height}`

  return (
    <svg viewBox={viewBox} height={chordProps.height} width={chordProps.width}>
      <ChordGrid {...chordProps}></ChordGrid>
    </svg>
  )
}

const ChordGrid = (props) => {
  return (
    <>
      <rect
        height={props.height}
        width={props.width}
        fill={props.bgColor}
      ></rect>

      <Strings
        numStrings={props.numStrings}
        stringWidth={props.stringWidth}
        height={props.height}
        width={props.width}
      />

      <Frets
        numFrets={props.numFrets}
        fretHeight={props.fretHeight}
        height={props.height}
        width={props.width}
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
            x={Math.max(0, spacing * i - props.stringWidth)}
            y={0}
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
            x={0}
            y={spacing * i}
            width={props.width}
            height={props.fretHeight}
            fill="black"
          ></rect>
        )
      })}
    </g>
  )
}

const Nut = () => {}

const TopBar = () => {}

const ChordName = () => {}

const StringLabels = () => {}

const FingerLabel = () => {}

const TopFretLabel = () => {}
