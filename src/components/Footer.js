import React from 'react';
import FilterLink from '../containers/FilterLink';
import FILTERS from '../constants/visibility-filters';

const Footer = () => (
  <footer>
    <span className="title">Show Me:</span>
    <nav>
      <FilterLink filter={FILTERS.SHOW_ALL}>All tasks</FilterLink>
      <span className="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>Your list without the deleted tasks</FilterLink>
      <span className="separator">&middot;</span>
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>Completed tasks list</FilterLink>
    </nav>
  </footer>
);

export default Footer;