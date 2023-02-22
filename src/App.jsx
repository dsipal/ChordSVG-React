import React from "react"
import ReactDOM from "react-dom/client"

//fingerings = [(1-6)...]

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
  stringWidth = 5,
  fretHeight = 2,
  bgColor = "white",
  positions = ["x", "3", "2", "0", "1"]
) => {
  const chordProps = {
    numStrings,
    stringWidth,
    fretHeight,
    bgColor,
    height,
    width,
    positions,
  }

  const viewBox = `0 0 ${width} ${height}`

  return (
    <svg viewBox={viewBox} height={chordProps.height} width={chordProps.width}>
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

  return (
    <>
      <rect
        height={props.height}
        width={props.width}
        fill={props.bgColor}
      ></rect>
      {minFret === 1 ? (
        <Nut height="10" width={props.width} fill="black" />
      ) : (
        <></>
      )}
      <Strings
        numStrings={props.numStrings}
        stringWidth={props.stringWidth}
        height={props.height}
        width={props.width}
      />

      <Frets
        numFrets={numFrets}
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

const Nut = (props) => {
  return (
    <rect id="nut" width={props.width} height={props.height} fill="black" />
  )
}

const TopBar = () => {}

const ChordName = () => {}

const StringLabels = () => {}

const FingerLabel = () => {}

const TopFretLabel = () => {}
