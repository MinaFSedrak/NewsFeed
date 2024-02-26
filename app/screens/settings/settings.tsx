
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SettingsNavProps } from '../../navigators';
import Icon from 'react-native-vector-icons/AntDesign';
import { useThemeStyle } from '../../theme';
import { translate } from '../../i18n';

export const Settings = ({ navigation, route }: SettingsNavProps<"Settings">) => {

    const themeStyle = useThemeStyle(styles);

    // Functionality and events
    useEffect(() => {
    }, []);


    const renderChangeLanguageBtn = () => {
        return (
            <TouchableOpacity style={themeStyle.changeLanguageBtnContainer} onPress={() => navigation.navigate("ChangeLanguage")}>
                <Text style={themeStyle.changeLanguageText}>{translate("changeLanguage.title")}</Text>
                <Icon name='right' size={20} color={themeStyle.rightIconColor.color} />
            </TouchableOpacity>
        )
    }

    // UI     
    return (
        <View style={themeStyle.mainContainer}>
            {renderChangeLanguageBtn()}
        </View>
    );
};