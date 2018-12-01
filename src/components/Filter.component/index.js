import { Component } from 'react';
import FilterSearchItem from '../FilterSearchItem.component';
import FilterSelectItem from '../FilterSelect.component';

import styles from './style.css';

class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      name: '',
    };
  }

  onChangeFilters = (filterName) => {
    return (data) => {
      this.setState({
        [filterName]: data,
      }, () => {
        const { cities, name } = this.state;
        this.props.onChangeFilter({
          cities,
          name,
        });
      });
    };
  }

  render() {
    return (
      <div className={ styles.filterBlock }>
        <FilterSearchItem onChange={this.onChangeFilters('name')}></FilterSearchItem>
        <FilterSelectItem onChange={this.onChangeFilters('cities')} options={this.props.options.cities}></FilterSelectItem>
      </div>
    );
  }
}
export default AppComponent;
