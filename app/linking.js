
const config = {
    screens: {
        NewsStack: {
            screens: {
                News: {
                    path: "News/:searchTerm",
                    stringify: {
                        searchTerm: (searchTerm) => `${searchTerm}`
                    }
                }
            }
        },
        SettingsStack: {
            screens: {
                ChangeLanguage: "ChangeLanguage"
            }
        }
    }
}

const linking = {
    prefixes: ["demo://app"],
    config
}

export default linking;