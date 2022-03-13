import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import {Link} from 'react-router-dom';

function List({ hits, handleSubmit }) {
	//Line:30 wrapping in Form the input field and button and calling  handleSubmit function
	return (
		<div>
			{/* <div className='main-nav'>
				<div className='container'>
					<form onSubmit={handleSubmit}>
						<div className='inputWrap'>
							<input
								className='searchInput'
								type='text'
								placeholder=' Enter '
								name='searchbar'
								//onChange={handleSubmit}
							/>
							<div className='SearchIcon'>
								<SearchIcon />
							</div>
						</div>
						<button className='button' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div> */}
			<Form onSubmit={handleSubmit}>
				<InputGroup className='mb-3'>
					<FormControl
						name='searchbar'
						type='text'
						placeholder='Enter'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
					<Button type='submit' variant='outline-secondary' id='button-addon2'>
						Button
					</Button>
				</InputGroup>
			</Form>
			<div>
				{hits.length !== 0 && ( //display the title from hits-object
					<ul className='list-group mb-4'>
						{hits.map((hit, index) => {
							return (
								<li className='list-group-item' key={index}>
									{hit.title}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
}

export default List;
