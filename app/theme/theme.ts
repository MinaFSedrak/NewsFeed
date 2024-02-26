import { useTheme } from "@react-navigation/native";
import React from "react";
import { palette } from "./palette"

export interface CustomTheme {
  dark: boolean;
  colors: {
    palette: Object;
    transparent: string;
    primary: string;
    primaryDarker: string;
    line: string;
    dim: string;
    error: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    checkmark: string;
  }
}

export const CustomDarkTheme: CustomTheme = {
  dark: true,
  colors: {
    palette,
    transparent: "rgba(0, 0, 0, 0)",
    primary: palette.white,
    primaryDarker: palette.white,
    line: palette.offWhite,
    dim: palette.shadeDarkGrey,
    error: palette.angry,
    background: palette.black,
    card: palette.shadeDarkGrey,
    text: palette.white,
    border: palette.white,
    notification: palette.white,
    checkmark: palette.babyBlue
  }
}


export const CustomLightTheme: CustomTheme = {
  dark: false,
  colors: {
    palette,
    transparent: "rgba(0, 0, 0, 0)",
    primary: palette.black,
    primaryDarker: palette.black,
    line: palette.offWhite,
    dim: palette.lighterGrey,
    error: palette.angry,
    background: palette.white,
    card: palette.brightGrey,
    text: palette.black,
    border: palette.shadeDarkGrey,
    notification: palette.black,
    checkmark: palette.babyBlue
  }
}

/**
 * 
 * @param styleSheet 
 * @returns Dark/Light styles 
 */
export const useThemeStyle = (styleSheet) => {
  const { colors } = useTheme();
  const styles = React.useMemo(() => styleSheet({ colors }), [colors]);
  return styles;
}
