import { Dimensions, ScaledSize } from 'react-native';

const { width, height }: ScaledSize = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

const scale = (size: number): number => width / guidelineBaseWidth * size;
const verticalScale = (size: number): number => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor: number = 0.5): number => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

