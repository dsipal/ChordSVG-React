import Svg, { Rect, Circle, Text } from "react-native-svg"

export default ChordSVG = (
  chordName,
  numStrings = 6,
  numFrets = 3,
  height,
  width,
  x,
  y,
  strokeWidth = 1,
  bgColor = "#fff",
  labelColor,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  labelWeight,
  tuning,
  showTuning
) => {
  return (
    <Svg>
      <chordGrid
        numStrings={numStrings}
        numFrets={numFrets}
        strokeWidth={strokeWidth}
        bgColor={bgColor}
      ></chordGrid>
    </Svg>
  )
}

const chordGrid = (numStrings, numFrets, strokeWidth, bgColor) => {
  return (
    <Rect height="100%" width="100%" bgColor={bgColor}>
      {[...Array(numStrings)].map((x, i) => {
        return <String />
      })}
    </Rect>
  )
}

const string = () => {}

const nut = () => {}

const topBar = () => {}

const chordName = () => {}

const stringLabels = () => {}

const fingerLabel = () => {}

const topFretLabel = () => {}
