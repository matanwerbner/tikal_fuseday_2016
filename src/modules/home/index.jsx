import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('homeState')
@observer
export default class HomePage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render (){
        const length = this.props.homeState.data && this.props.homeState.data.length;
        const { mostActiveWriter } = this.props.homeState;
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