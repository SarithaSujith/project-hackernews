import './App.css';
import Header from './components/Header';
import './components/Header.css';
import List from './components/List';
import Pagination from './components/Pagination';
//import './components/List.css';
import React, { useState, useEffect } from 'react';

function App() {
	// fetching the initial API from given link
	const [news, setNews] = useState([]);

	//console.log(news);
	const [loading, setLoading] = useState(false);
	//setSearchvalue to whatever is in the input field in List.js
	const [searchValue, setSearchValue] = useState('');
	//pagination intially begining with page 1
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(5); //here we  didnt use the setItemPerPage

	useEffect(() => {
		setLoading(true);
		const fetchNews = async () => {
			try {
				//const searchValue = 'react';
				const response = await fetch(
					`http://hn.algolia.com/api/v1/search?query=${searchValue}` //searchValue is any value searched
				);
				if (response.ok) {
					const jsonResponse = await response.json();
					console.log('response', jsonResponse);
					//console.log from json
					setNews(jsonResponse.hits);
					setLoading(false);
					return;
				}

				console.error("Fetch didn't work wout");
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchNews();
	}, [searchValue]);

	//goal: setSearchValue to input.value
	const handleSubmit = (event) => {
		console.log('handleSubmit', event);
		//setSearchValue(searchWord);
		event.preventDefault();
		console.log('target', event.target);
		//console.log('current searchvalue', searchValue);
		// 	//connecting searchbar with inputfield
		setSearchValue(event.target.searchbar.value);
		// 	//alert('hi there');
	};
	// get current news
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItem = news.slice(indexOfFirstItem, indexOfLastItem);
	//function paginate goes here, change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	console.log('currentItem', currentItem);

	return (
		<div className='App'>
			<header className='App-header'>
				<Header />

				{loading ? (
					<p>Loading...</p>
				) : (
					<List hits={currentItem} handleSubmit={handleSubmit} /> // i should change news to currentItem
				)}
				<Pagination
					itemPerPage={itemPerPage}
					totalItem={news.length}
					paginate={paginate}
				/>
			</header>
		</div>
	);
}

export default App;
