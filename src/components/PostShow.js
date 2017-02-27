import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost, nullPost} from '../actions/index';
import Loader from 'halogen/PulseLoader';
import {Link} from 'react-router';


class PostShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount(){
		this.props.fetchPost(this.props.params.id)
	}

	componentWillUnmount(){
		this.props.nullPost();
	}


	onDelete(){
		this.props.deletePost(this.props.params.id)
		setTimeout(() => this.context.router.push('/'),1000);
	}

	render(){
		const {post} = this.props;

			const res = post === null ? 
			<Loader className='loading-spinner' 
				 color="#26A65B" 
				 size="8px" 
				 margin="2px" /> :
				<div>
					<br/>
					<h3>{post.title}</h3>
					<h5>Categories: {post.categories}</h5>
					<p><b>Disription: </b>{post.content}</p>
				</div>

		return (
			<div>
				<br/>
				<Link to='/' className="btn btn-primary">Back To Index</Link>
				<button 
					className='btn btn-danger to-right'
					onClick={this.onDelete.bind(this)}>
						Delete Post
					</button>
				{res}				
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		post: state.posts.post,
		status: state.posts.status
	}
}

export default connect(mapStateToProps, {fetchPost, nullPost, deletePost})(PostShow);