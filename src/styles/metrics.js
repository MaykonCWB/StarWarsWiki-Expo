import { Dimensions, PixelRatio } from 'react-native'

const { height, width } = Dimensions.get('window')

const figmaWidth = 375

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const ScreenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return ScreenPixel
}

export const metrics = {
  px,
}
