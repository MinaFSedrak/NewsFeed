import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { translate } from '../../i18n';
import { useThemeStyle } from '../../theme';
import { styles } from './styles';

interface SearchProps {
    searchTerm: string;
    onChangeText: (newSearchTerm: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchTerm, onChangeText }) => {
    const themeStyle = useThemeStyle(styles);

    const rendeSearchIcon = () => {
        return (
            <FontAwesomeIcon
                name="search"
                size={23}
                color={themeStyle.searchIconColor.color}
                style={themeStyle.searchIcon}
            />
        )
    }

    const renderSearchInput = () => {
        return (
            <TextInput
                style={themeStyle.searchInput}
                onChangeText={onChangeText}
                placeholderTextColor={themeStyle.searchInput.color}
                value={searchTerm}
                underlineColorAndroid="transparent"
                placeholder={translate("news.search")}
            />
        )
    }

    const renderClearIcon = () => {
        if (searchTerm) {
            return (
                <TouchableOpacity
                    style={themeStyle.clearIcon}
                    onPress={() => onChangeText('')}
                >
                    <IonIcon
                        name="ios-close-circle"
                        size={23}
                        color={themeStyle.searchInput.color}
                    />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={themeStyle.mainContainer}>
            {rendeSearchIcon()}
            {renderSearchInput()}
            {renderClearIcon()}
        </View>
    );
};

