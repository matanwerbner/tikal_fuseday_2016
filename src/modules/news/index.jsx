import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('appState')
@observer
export default class News extends React.Component {

    constructor(props) {
        super(props);
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

    render (){
        const news = this.props.appState.data || [];
        return <div>{news.map ( (newsItem) =>
          <div>
          { newsItem.author }
          { newsItem.crawled }
     </div>)}


          </div>;
    }
}