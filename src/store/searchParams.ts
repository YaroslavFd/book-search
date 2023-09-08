import { makeAutoObservable } from 'mobx';

class SearchParams {
  searchValue = '';
  searchOptions: SearchOptions = { category: 'all', orderBy: 'relevance' };

  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue(value: string) {
    this.searchValue = value;
  }

  setSearchOptions(category: CategoryType, orderBy: OrderByType) {
    this.searchOptions = { category, orderBy };
  }
}

export default new SearchParams();
