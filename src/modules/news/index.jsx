import React from 'react';
import {inject, observer} from 'mobx-react';
import {List, ListItem} from 'material-ui/List';
const Router = require('react-router');

@inject('appState')
@observer
export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.itemClicked = this.itemClicked.bind(this);
    }

    itemClicked(uuid) {
         Router.browserHistory.push(`article/${uuid}`);
    }
    /*     { newsItem.entities }
     { newsItem.external_links }
     { newsItem.highlightText }
     { newsItem.highlightTitle }
     { newsItem.language }
     { newsItem.ord_in_thread }
     { newsItem.published }
     { newsItem.text }
     { newsItem.thread }
     { newsItem.title }
     { newsItem.url_uuid } */
    render() {
        const news = this.props.appState.topData || [];
        return <List>
        {
            news.map(
                (newsItem) => <ListItem key={newsItem.uuid} onClick={ () => this.itemClicked(newsItem.uuid) } primaryText={newsItem.title} />
            )
        }
        </List>;
    }
}