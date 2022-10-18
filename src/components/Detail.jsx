import React from 'react'

export class Detail extends React.Component {
	constructor(p) {
		super(p)

		const { location, history } = this.props

		if (location.state === undefined) {
			history.push('/')
		}
	}

	render() {
		const {
			location: { state },
		} = this.props

		return <span>{state.title}</span>
	}

	componentDidMount() {}
}
