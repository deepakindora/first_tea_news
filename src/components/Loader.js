import React from 'react'

export default class Loader extends React.Component {
	render() {
		return (
			<div className="text-center my-5">
				<img src="loader.gif" alt="Loading..."/>
			</div>
		)
	}
}