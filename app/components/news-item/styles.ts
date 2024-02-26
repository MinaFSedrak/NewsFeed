import { StyleSheet } from "react-native";
import { CustomTheme, spacing } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        marginVertical: 7,
        marginHorizontal: 25,
        backgroundColor: props.colors.card,
        borderRadius: 10,
        overflow: "hidden"
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 135,
        width: 155
    },

    headingTextContainer: {
        flexShrink: 1,
        padding: 10
    },

    headingText: {
        fontSize: spacing.regular,
        color: props.colors.text
    }
});