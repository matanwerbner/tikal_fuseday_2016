import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('homeState')
@observer
export default class HomePage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.homeState.getNews();
    }

    render (){
        const length = this.props.homeState.data && this.props.homeState.data.length;
        return <div>{ length }</div>;
    }
} 