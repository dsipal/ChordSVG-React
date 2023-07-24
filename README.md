This is a WIP library to allow for on demand generation of SVG chord tabs using React.
Based on [ChordSVG by mwcm](https://github.com/mwcm/ChordSVG).

## Usage:
Just declare a new ChordSVG element as follows:

```js
const chord = ChordSVG(
  fontSize = 48,
  height = 300,
  topBarHeight = 100,
  tuningHeight = 100,
  width = 600,
  widthPadding = 100,
  numStrings = 6,
  stringWidth = 5,
  fretHeight = 2,
  numFrets = 6,
  bgColor = "white",
  positions = ["x", "3", "2", "0", "1", "0"],
  tuning = ["E", "A", "D", "G", "B", "e"]
)
```

The default parameters are shown, and can be adjusted to your requirements.

