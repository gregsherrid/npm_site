import React from 'react';

export default React.createClass({
	render() {
		return (
			<div>
				<h2>Repo: { this.props.params.repoName }</h2>
				<p><em>User</em>: { this.props.params.userName }</p>
			</div>
		);
	}
})