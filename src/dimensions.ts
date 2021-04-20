import { Dimensions } from "react-native";

export const height = (multiplier: number = 1) => Dimensions.get('screen').height * multiplier
export const width = (multiplier: number = 1) => Dimensions.get('screen').width * multiplier