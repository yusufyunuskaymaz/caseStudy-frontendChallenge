import React from 'react';

const Paginate = ({ postsPerPage, totalFilms, filteredTotalFilms, paginate }) => {
  const total = filteredTotalFilms ? filteredTotalFilms : totalFilms
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='bg-dark d-flex justify-content-center align-items-center py-4 mt-5'>
      <ul className='pagination m-0'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)}  className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
