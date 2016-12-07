import {getOn} from '../config/firebase';
import {add} from './indexdb';
class _ArticlesService {
    constructor() {
        getOn((snapshot) => add(snapshot.val()));
    }

    read() {
        function read() {
            
        }

    }

}

export default new _ArticlesService();