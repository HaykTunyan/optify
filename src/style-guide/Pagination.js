import React from 'react';
import ReactPaginate from 'react-paginate';
import Icon from './Icon';

const Pagination = ({ pageCount, onChange, page }) => (
  <ReactPaginate
    forcePage={page}
    previousLabel={null}
    nextLabel={<Icon.RightArrow />}
    breakLabel={'...'}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    onPageChange={onChange}
    containerClassName={'pagination'}
    activeClassName={'active-page'}
    disableInitialCallback={true}
  />
);

export default Pagination;
