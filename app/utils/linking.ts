import { Alert, Linking } from "react-native";


export const openExternalLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`Unable to open the following URL: ${url}`);
    }
}