import { StyleSheet } from "react-native";
import { CustomTheme, spacing } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: props.colors.background,
        paddingTop: 50
    },

    changeLanguageBtnContainer: {
        backgroundColor: props.colors.dim,
        flexDirection: 'row',
        width: '100%',
        height: 53,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginVertical: 10
    },

    rightIconColor: {
        color: props.colors.text
    },

    changeLanguageText: {
        fontSize: spacing.regular,
        color: props.colors.text
    }
});