import { StyleSheet } from "react-native";
import { CustomTheme } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: props.colors.background
    },

    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    emptyImage: {
        width: 400,
        height: 300
    },

    noDataText: {
        color: props.colors.text
    }
});