
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { SettingsNavProps } from '../../navigators';
import { APP_LANGUAGES } from '../../utils';
import Icon from 'react-native-vector-icons/Feather';
import { save, STORAGE_KEYS } from '../../utils/storage';
import RNRestart from 'react-native-restart';
import { useThemeStyle } from '../../theme';

export const ChangeLanguage = ({ navigation, route }: SettingsNavProps<"ChangeLanguage">) => {

    const themeStyle = useThemeStyle(styles);

    // Functionality and events
    useEffect(() => {
    }, []);

    const changeLanguage = async (lang: string) => {
        await save(STORAGE_KEYS.USER_APP_LANGUAGE, lang);
        RNRestart.Restart();
    }


    // UI
    const renderLanguageItem = (item) => {
        const { title, lang } = item;
        return (
            <TouchableOpacity
                style={themeStyle.langBtnContainer}
                onPress={() => changeLanguage(lang)}
                disabled={global.AppLang == lang}
            >
                <Text style={themeStyle.langBtnText}>{title}</Text>
                {(global.AppLang == lang) &&
                    <Icon name='check' style={themeStyle.checkmarkIcon} size={26} />
                }
            </TouchableOpacity>
        );
    }


    const renderLanguagesList = () => {
        return (
            <FlatList
                data={APP_LANGUAGES}
                renderItem={({ item }) => renderLanguageItem(item)}
            />
        );
    }

    // UI     
    return (
        <View style={themeStyle.mainContainer}>
            {renderLanguagesList()}
        </View>
    );
};