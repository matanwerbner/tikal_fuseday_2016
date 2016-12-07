import {observable} from 'mobx';
import {readAll} from '../../services/indexdb';

class HomeState {
    constructor() {}

    @observable
    data: [];

    getNews() {
        readAll().then((d) => {
            this.data = Object.keys(d).map((key) => d[key]);
        })
    }
}

export default HomeState;