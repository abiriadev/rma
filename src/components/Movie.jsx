import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import { Link } from 'react-router-dom'

export const Movie = ({ id, title, rating, summary, poster, year, genres }) => (
	<div className='movie'>
		<Link
			to={{
				pathname: '/page',
				state: {
					year,
					title,
					summary,
					poster,
					genres,
				},
			}}
		>
			<img src={poster} alt={title} title={title} />
			<div className='movie__data'>
				<h3 className='movie__title'>{title}</h3>
				<h5 className='movie__year'>{year}</h5>
				<ul className='movie__genres'>
					{genres.map((genre, id) => (
						<li key={id} className='movie__genre'>
							{genre}
						</li>
					))}
				</ul>
				<p className='movie__summary'>{summary.slice(0, 180)}...</p>
				<p>{rating}</p>
			</div>
		</Link>
	</div>
)

Movie.propTypes = {
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
