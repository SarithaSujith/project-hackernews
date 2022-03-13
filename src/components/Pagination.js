import React from 'react';
//import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Pagination = ({ itemPerPage, totalItem, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} href='!#' className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default Pagination;
