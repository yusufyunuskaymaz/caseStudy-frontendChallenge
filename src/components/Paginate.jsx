import React from 'react';

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='bg-dark d-flex justify-content-center align-items-center py-4 mt-5'>
      <ul className='pagination m-0'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href type='button' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
