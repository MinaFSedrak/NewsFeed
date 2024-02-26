import { StyleSheet } from "react-native";
import { CustomTheme } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: props.colors.transparent,
        justifyContent: 'center',
        alignItems: 'center'
    }
});