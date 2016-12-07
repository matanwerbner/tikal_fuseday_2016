import { observable } from 'mobx';
import { getAll } from './services/indexdb';
class AppState {
  constructor() {
  }

  news = {
    data: [],
    getNews: () => {
      getAll().then((data) => {
        this.data = data;
      })
    }
  }
}

export default AppState;
