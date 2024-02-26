
import React, { useEffect } from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { setupLocalization } from './i18n';
import { AppNavigator } from './navigators';

const App = () => {

    useEffect(() => {
        setupApp()
    }, [])

    const setupApp = async () => {
        await setupLocalization()
    }

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator />
        </SafeAreaProvider>
    );
};


export default App;
