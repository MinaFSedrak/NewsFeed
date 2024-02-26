import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useThemeStyle } from '../../theme';
import { styles } from './styles';

interface LoadingProps {
    loading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ loading = false }) => {
    const themeStyle = useThemeStyle(styles);
    if (loading) {
        return (
            <View style={themeStyle.mainContainer}>
                <ActivityIndicator size='large' />
            </View>
        );
    }
    return null;
};

