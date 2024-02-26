
import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl, Image, Text, StyleSheet, Alert } from 'react-native';
import { API } from '../../services/api/api';
import { Article } from '../../services/api/api-types';
import { Loading, NewsItem, Search } from '../../components';
import { styles } from './styles';
import { NewsNavProps } from '../../navigators';
import { ASSETS } from '../../utils';
import { translate } from '../../i18n';
import { useThemeStyle } from '../../theme';

export const News = ({ navigation, route }: NewsNavProps<"News">) => {

    const [articles, setArticles] = useState<Article[] | []>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const themeStyle = useThemeStyle(styles);

    // Show Deep Linking Value
    if (route?.params?.searchTerm) {
        Alert.alert(translate("news.deepLinkingText") + route.params.searchTerm);
    }

    // Functionality and events
    useEffect(() => {
        getNews();
    }, []);

    /**
     * The api request can be invoked from redux saga or mobx in bigger apps
     */
    const getNews = async (newSearchTerm: string = '') => {
        setLoading(true);
        let newsResponse = await API.getNews(newSearchTerm);
        (newsResponse.kind == "ok" && newsResponse.articles) && setArticles(newsResponse.articles);
        setLoading(false);
    }

    const onRefresh = () => {
        setRefreshing(true);
        getNews(searchTerm);
        setRefreshing(false);
    }

    const onChangeSearchText = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        getNews(newSearchTerm);
    }


    // UI
    const renderSearch = () => {
        return (
            <Search
                searchTerm={searchTerm}
                onChangeText={onChangeSearchText}
            />
        )
    }

    const renderEmptyView = () => {
        if (!loading) {
            return (
                <View style={themeStyle.emptyContainer}>
                    <Image source={ASSETS.noData} style={themeStyle.emptyImage} />
                    <Text style={themeStyle.noDataText}>{translate("news.noData")}</Text>
                </View>
            )
        }
        return null;
    }

    const renderNewsItem = (article: Article) => {
        return (
            <NewsItem
                onPress={() => navigation.navigate('NewsDetails', { article })}
                heading={article?.title}
                imageUri={article?.urlToImage}
            />
        )
    }

    const renderNewsList = () => {
        return (
            <FlatList
                data={articles}
                renderItem={(item) => renderNewsItem(item.item)}
                ListEmptyComponent={renderEmptyView}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        )
    }

    return (
        <View style={themeStyle.mainContainer}>
            <Loading loading={loading} />
            {renderSearch()}
            {renderNewsList()}
        </View>
    );
};