import React, { Component } from 'react';
import Axios from 'axios';
import './landing.css'; // Your main landing page CSS
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const PostCard = ({ post }) => {
    if (!post || !post.fields || !post.sys) {
        return null;
    }

    const contentTypeId = post.sys.contentType?.sys?.id;
    const slug = post.fields.slug;
    const title = post.fields.title;
    const firstParagraph = post.fields.firstparagraph;
    const imageUrl = post.fields.images && post.fields.images[0]?.fields?.file?.url;

    let linkPath = '';
    if (contentTypeId === 'articlesart') {
        linkPath = `/articles/${slug}`;
    } else if (contentTypeId === 'articlesfeatured') {
        linkPath = `/featured/${slug}`;
    } else {
        return null;
    }

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
                <img className='images' src={imageUrl} alt={title || 'Post Image'} />
            ) : (
                <div className="placeholder-image">No Image Available</div>
            )}
            <Link className='post-title' to={linkPath}>
                <label>{title}</label>
            </Link>
            <p className='post-text'>
                {renderParagraphText(firstParagraph)}
            </p>
        </div>
    );
};

// Main Component: Landing 
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: [],
            loading: true, 
            error: null, 
        };
    }

    componentDidMount() {
        this.getAllPosts(); // Call the data fetching function
        
        // Initialize Google Analytics
        ReactGA.initialize('UA-174924337-1');
        // Track pageview, with a fallback if location isn't available from props
        if (this.props.location && this.props.location.pathname) {
            ReactGA.pageview(this.props.location.pathname);
        } else {
            console.warn("ReactGA: this.props.location.pathname is undefined. Using window.location.pathname fallback.");
            ReactGA.pageview(window.location.pathname);
        }
    }

    getAllPosts = async () => {
        this.setState({ loading: true, error: null });
        try {
            const res = await Axios.get('/api/article/post/all/');
            this.setState({
                allPosts: res.data.items || [],
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching all posts:', error);
            this.setState({
                loading: false,
                error: 'Failed to load posts. Please try again later.',
                allPosts: [], // Clear posts on error
            });
        }
    };

    // Render the list of all posts using the PostCard helper component
    renderPostList = () => {
        const { allPosts, loading, error } = this.state;

        if (loading) {
            return <p className="loading-message">Loading posts...</p>;
        }

        if (error) {
            return <p className="error-message">{error}</p>;
        }

        if (allPosts.length === 0) {
            return <p className="no-posts-message">No posts found.</p>;
        }

        return allPosts.map((post) => {
            const key = post.sys?.id || `${post.fields?.slug}-${post.sys?.createdAt}`;
            return <PostCard key={key} post={post} />;
        });
    };

    render() {
        return (
            <div className="landing-wrapper">
                <div className='featured-wrapper'>
                    {this.renderPostList()}
                </div>
            </div>
        );
    }
}

export default Landing;
