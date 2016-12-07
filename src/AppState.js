import {observable, action} from 'mobx';
import { readAll } from './services/indexdb';

class AppState {
    constructor() {
	    readAll().then((d) => {
		    this.data = Object.keys(d).map((key) => d[key]);
	    })
    }

    @observable
    data: [];

    @action
		addItem(item){
	    data.push(item);
    }
}

export default AppState;