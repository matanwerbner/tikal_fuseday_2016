import {observable} from 'mobx';
import {readAll} from '../../services/indexdb';

class HomeState {
    constructor() {
        readAll().then((d) => {
            this.data = Object.keys(d).map((key) => d[key]);
        })
    }

    @observable
    data: [];

    getNews() {
        
    }
}

export default HomeState;