import React from 'react';
import {inject, observer} from 'mobx-react';

const component = ({params, appState}) => {
    debugger;
    const {articleId} = params;
    const article = appState.getArticleByUuid(articleId);
    return <div>{
        article && article.text
    }</div>;
}

export default inject('appState')(observer(component));