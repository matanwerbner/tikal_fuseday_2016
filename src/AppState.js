import {observable, computed, action} from 'mobx';
import { readAll } from './services/indexdb';
import  { groupBy, sortBy, reverse} from 'lodash';
class AppState {
    constructor() {
	    readAll().then((d) => {
            debugger;
		    this.data = Object.keys(d).map((key) => d[key]);
	    })
    }

    @observable
    data: [];

    @computed
    get mostActiveWriter() {
        const groupedBy = groupBy(this.data, 'author');
        const sorted = sortBy(groupedBy);
        const reversed = reverse(sorted);
        if(reversed[0]) {
            return reversed[0].author;
        }
        return '';
    }
    
    @action
		addItem(item){
	    data.push(item);
    }
}

export default AppState;