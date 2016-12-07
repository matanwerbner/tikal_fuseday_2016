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
        const { mostActiveWriter } = this.props.appState;
        return <div>
            <div>
                We have { length } articles
            </div>
            <div>
                Most Active Author is: { mostActiveWriter }
            </div>
        </div>;
    }
} 