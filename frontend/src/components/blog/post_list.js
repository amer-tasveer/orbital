import React, { Component } from 'react';
import Axios from 'axios';
import './post_list.css';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredPosts: [], // Renamed for clarity
            loading: true,     // Set to true initially to indicate data is being fetched
            error: null,       // Add an error state for better handling
        };
    }

    componentDidMount() {
        this.getFeaturedPosts(); // Renamed for clarity
        ReactGA.initialize('UA-174924337-1');
        // Ensure location is available before calling pageview,
        // especially if this component might be rendered without react-router props
        if (this.props.location && this.props.location.pathname) {
            ReactGA.pageview(this.props.location.pathname);
        } else {
            console.warn("ReactGA: this.props.location.pathname is undefined. Cannot track pageview.");
            ReactGA.pageview(window.location.pathname); // Fallback to window.location
        }
    }

    // Use async/await for cleaner asynchronous code and better error handling
    getFeaturedPosts = async () => {
        this.setState({ loading: true, error: null }); // Reset error on new fetch
        try {
            const res = await Axios.get('/api/article/post/featured/');
            this.setState({
                featuredPosts: res.data.items || [], // Ensure it's an array even if API returns null/undefined
                loading: false,
            });
            // console.log(this.state.featuredPosts); // Avoid console.log inside render/lifecycle for production
        } catch (error) {
            console.error('Error fetching featured posts:', error);
            this.setState({
                loading: false,
                error: 'Failed to load featured posts. Please try again later.',
                featuredPosts: [], // Clear posts on error
            });
        }
    };

    // Extracted paragraph rendering logic into a pure function
    // This could also be a separate helper function outside the component if reused
    renderParagraphText(data) {
        if (!data || !data.content) {
            return null; // Return null if data or content is missing
        }

        // Find the first paragraph with a value
        const firstParagraphNode = data.content.find(
            (node) => node.content && node.content[0] && node.content[0].value
        );

        return firstParagraphNode ? firstParagraphNode.content[0].value : null;
    }

    renderFeaturedPosts = () => { // Renamed and made an arrow function
        const { featuredPosts, loading, error } = this.state;

        if (loading) {
            return <p>Loading featured posts...</p>;
        }

        if (error) {
            return <p className="error-message">{error}</p>;
        }

        if (featuredPosts.length === 0) {
            return <p>No featured posts found.</p>;
        }

        return featuredPosts.map((post) => {
            // Add a unique key for list items, ideally using a post ID
            // Assuming post has a unique 'sys.id' or 'slug' if available, otherwise fallback to index
            const key = post.sys?.id || post.fields?.slug || `post-${post.fields.title}-${post.sys.createdAt}`; // More robust key
            const imageUrl = post.fields.images && post.fields.images[0] && post.fields.images[0].fields.file && post.fields.images[0].fields.file.url;

            return (
                <div className='featured-container' key={key}>
                    {imageUrl ? (
                        <img className='images' src={imageUrl} alt={post.fields.title || 'Featured Post Image'} />
                    ) : (
                        <div className="placeholder-image">No Image</div> // Placeholder for missing images
                    )}
                    <Link className='post-title' to={`/featured/${post.fields.slug}`}>
                        <label>{post.fields.title}</label>
                    </Link>
                    <p className='post-text'>
                        {this.renderParagraphText(post.fields.firstparagraph)}
                    </p>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="postlist-wrapper">
                <div className='article-wrapper'>
                    {this.renderFeaturedPosts()}
                </div>
            </div>
        );
    }
}

export default PostList;