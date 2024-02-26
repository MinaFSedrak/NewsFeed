
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { NewsNavProps } from '../../navigators';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useThemeStyle } from '../../theme';
import { CONSTANTS, openExternalLink } from '../../utils';
import { translate } from '../../i18n';

export const NewsDetails = ({ navigation, route }: NewsNavProps<"NewsDetails">) => {

    let { article } = route.params;
    const themeStyle = useThemeStyle(styles);

    // UI
    const renderCover = () => {
        return (
            <View style={themeStyle.coverContainer}>
                <Image source={{ uri: article.urlToImage || CONSTANTS.DEFAULT_NEWS_URL }} style={themeStyle.cover} resizeMode='cover' />
            </View>
        )
    }

    const renderText = (value: string, textStyle?: object, containerStyle?: object,) => {
        return (
            <View style={containerStyle}>
                <Text style={textStyle}>{value}</Text>
            </View>
        )
    }

    const renderTitle = () => {
        if (article?.title) {
            return renderText(article.title, themeStyle.title, themeStyle.titleContainer);
        }
    }

    const renderDescription = () => {
        if (article?.description) {
            return renderText(article.description, themeStyle.dateDescContentText, themeStyle.descContainer);
        }
    }

    const renderContent = () => {
        if (article?.content) {
            return renderText(article.content, themeStyle.dateDescContentText)
        }
    }

    const renderAuthor = () => {
        if (article?.author) {
            let author = translate("newsDetails.by") + article.author;
            return renderText(author, themeStyle.author, themeStyle.authorSrcContainer);
        }
    }

    const renderSource = () => {
        if (article?.source.name) {
            let source = translate("newsDetails.source") + article.source.name;
            return renderText(source, themeStyle.source, themeStyle.authorSrcContainer);
        }
    }

    const renderDate = () => {
        if (article?.publishedAt) {
            let date = translate("newsDetails.date") + new Date(article.publishedAt).toLocaleDateString();
            return renderText(date, themeStyle.dateDescContentText, themeStyle.dateContainer);
        }
    }

    const renderLink = () => {
        if (article?.url) {
            return (
                <Icon
                    onPress={() => openExternalLink(article.url)}
                    name="external-link-alt"
                    size={35}
                    color={themeStyle.linkColor.color}
                />
            )
        }
    }

    const renderAuthorSrcDateLinkView = () => {
        return (
            <View style={themeStyle.authorSrcDateLinkContainer}>
                <View>
                    {renderAuthor()}
                    {renderSource()}
                    {renderDate()}
                </View>
                {renderLink()}
            </View>
        )
    }

    return (
        <ScrollView style={themeStyle.mainContainer} >
            <View style={themeStyle.innerContainer}>
                {renderTitle()}
                {renderDescription()}
                {renderCover()}
                {renderAuthorSrcDateLinkView()}
                {renderContent()}
            </View>
        </ScrollView >
    );
};