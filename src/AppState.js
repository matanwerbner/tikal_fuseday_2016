import {observable, computed, action} from 'mobx';
import { readAll } from './services/indexdb';
import  { groupBy, sortBy, reverse, take, find} from 'lodash';
class AppState {
    constructor() {
	    readAll().then((d) => {
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

    getArticleByUuid(uuid) {
        return find(this.data, {uuid})
    }

    @computed 
    get topData() {
        return take(this.data, 300);
    }

    @computed
    get isLoading() {
        return !this.data;
    }
    
    @action
		addItem(item){
	    data.push(item);
    }
}

export default AppState;