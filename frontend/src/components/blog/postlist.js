import React, { Component } from 'react';
import Axios from 'axios';
import './postlist.css'; // Ensure your CSS is well-defined for these classes
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

// Helper component to render a single featured post card
const FeaturedPostCard = ({ post }) => {
    // Basic validation to ensure post data is available
    if (!post || !post.fields || !post.sys) {
        return null; // Don't render if data is incomplete
    }

    const title = post.fields.title;
    const slug = post.fields.slug;
    // Safely access image URL with optional chaining
    const imageUrl = post.fields.images && post.fields.images[0]?.fields?.file?.url;
    const firstParagraph = post.fields.firstparagraph;

    // Helper function to extract text from Contentful rich text paragraph
    const renderParagraphText = (data) => {
        if (!data || !data.content) {
            return null;
        }
        // Find the first paragraph node that contains actual text value
        const firstParagraphNode = data.content.find(
            (node) => node.nodeType === 'paragraph' && node.content && node.content[0] && node.content[0].value
        );
        return firstParagraphNode ? firstParagraphNode.content[0].value : null;
    };

    return (
        <div className='featured-container'>
            {imageUrl ? (
                <img className='images' src={imageUrl} alt={title || 'Featured Post Image'} />
            ) : (
                // Placeholder if image URL is missing
                <div className="placeholder-image">No Image Available</div>
            )}
            <Link className='post-title' to={`/featured/${slug}`}>
                <label>{title}</label>
            </Link>
            <p className='post-text'>
                {renderParagraphText(firstParagraph)}
            </p>
        </div>
    );
};

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
        
        // Initialize Google Analytics and track pageview
        ReactGA.initialize('UA-174924337-1');
        // Robust pageview tracking with fallback
        if (this.props.location && this.props.location.pathname) {
            ReactGA.pageview(this.props.location.pathname);
        } else {
            console.warn("ReactGA: this.props.location.pathname is undefined. Using window.location.pathname fallback.");
            ReactGA.pageview(window.location.pathname);
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
            // console.log("Fetched featured posts:", this.state.featuredPosts); // Avoid console.log inside render/lifecycle for production
        } catch (error) {
            console.error('Error fetching featured posts:', error);
            this.setState({
                loading: false,
                error: 'Failed to load featured posts. Please try again later.',
                featuredPosts: [], // Clear posts on error
            });
        }
    };

    // Render the list of featured posts
    renderFeaturedPostList = () => { // Renamed for clarity
        const { featuredPosts, loading, error } = this.state;

        if (loading) {
            return <p className="loading-message">Loading featured posts...</p>;
        }

        if (error) {
            return <p className="error-message">{error}</p>;
        }

        if (featuredPosts.length === 0) {
            return <p className="no-posts-message">No featured posts found.</p>;
        }

        return featuredPosts.map((post) => {
            // Add a unique key for list items, ideally using a post ID
            // Assuming post has a unique 'sys.id' or 'slug' if available
            const key = post.sys?.id || `${post.fields?.slug}-${post.sys?.createdAt}`;
            return <FeaturedPostCard key={key} post={post} />;
        });
    };

    render() {
        return (
            <div className="postlist-wrapper">
                <div className='article-wrapper'>
                    {this.renderFeaturedPostList()}
                </div>
            </div>
        );
    }
}

export default PostList;
