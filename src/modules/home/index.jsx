import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('appState')
@observer
export default class HomePage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render (){
        const length = this.props.appState.data && this.props.appState.data.length;
        return <div>{ length }</div>;
    }
} 