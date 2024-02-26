import { StyleSheet } from "react-native";
import { CustomTheme, spacing } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 8,
        height: 50,
        margin: 20,
        borderBottomWidth: 1,
        borderBottomColor: props.colors.border
    },

    searchIcon: {
        transform: [{ scaleX: -1 }],
        marginRight: 16
    },

    searchIconColor: {
        color: props.colors.border
    },

    searchInput: {
        flex: 1,
        height: 45,
        fontSize: spacing.regular,
        color: props.colors.text
    },

    clearIcon: {
        padding: 5,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});