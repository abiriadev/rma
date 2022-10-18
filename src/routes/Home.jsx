import React from 'react'
import axios from 'axios'
import { Movie } from '../components/Movie'
import './Home.css'

export class Home extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	}

	render() {
		return (
			<section className='container'>
				{this.state.isLoading ? (
					<div className='loader'>
						<span className='loader__text'>Loading...</span>
					</div>
				) : (
					<div className='movies'>
						{this.state.movies.map(
							({
								title,
								id,
								rating,
								summary,
								year,
								medium_cover_image,
								genres,
							}) => (
								<Movie
									key={id}
									id={id}
									title={title}
									rating={rating}
									poster={medium_cover_image}
									summary={summary}
									year={year}
									genres={genres}
								/>
							),
						)}
					</div>
				)}
			</section>
		)
	}

	componentDidMount() {
		this.getMovies().then(movies =>
			this.setState(curr => ({
				isLoading: false,
				movies,
			})),
		)
	}

	getMovies = async () =>
		(
			await axios.get(
				'https://yts.mx/api/v2/list_movies.json?sort_by=rating',
			)
		)?.data?.data?.movies
}
