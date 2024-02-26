import { StyleSheet } from "react-native";
import { CustomTheme, spacing } from "../../theme";

export const styles = (props: CustomTheme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: props.colors.background
    },

    innerContainer: {
        margin: 25
    },

    titleContainer: {
        marginBottom: 20
    },

    title: {
        fontSize: spacing.large,
        color: props.colors.text
    },

    coverContainer: {
        height: 230,
        width: '100%',
        marginBottom: 15
    },

    linkColor: {
        color: props.colors.text
    },

    cover: {
        flex: 1,
        borderRadius: 5
    },

    authorSrcDateLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    authorSrcContainer: {
        marginBottom: 5
    },

    author: {
        fontSize: spacing.regular,
        color: props.colors.text
    },

    source: {
        fontSize: spacing.regular,
        color: props.colors.text
    },

    dateContainer: {
        marginBottom: 25
    },

    descContainer: {
        marginBottom: 20
    },

    dateDescContentText: {
        fontSize: spacing.regular,
        color: props.colors.text
    }

});