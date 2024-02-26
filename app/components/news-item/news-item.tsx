import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useThemeStyle } from "../../theme";
import { CONSTANTS } from "../../utils";
import { styles } from "./styles";

interface NewsItemProps {
    onPress: () => void;
    heading: string;
    imageUri: string
}

export const NewsItem: React.FC<NewsItemProps> = ({ onPress, heading, imageUri }) => {
    const themeStyle = useThemeStyle(styles);

    const renderImage = () => {
        return (
            <View style={themeStyle.imageContainer}>
                <Image style={themeStyle.image} source={{ uri: imageUri || CONSTANTS.DEFAULT_NEWS_URL }} />
            </View>
        )
    }

    const renderHeading = () => {
        return (
            <View style={themeStyle.headingTextContainer}>
                <Text style={themeStyle.headingText}>{heading}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={themeStyle.mainContainer}>
            {renderImage()}
            {renderHeading()}
        </TouchableOpacity>
    )
};