import React, { Component } from 'react';
import Axios from 'axios';
import './post.css'; // Make sure your CSS classes are well-defined
import ReactGA from 'react-ga';

// --- Helper Component: ContentBlock ---
// This component encapsulates the logic for rendering a single paragraph block
// including its images and text.
const ContentBlock = ({ data }) => {
    // If no data is provided for this block, don't render anything
    if (!data) return null;

    // Helper to render images within a content block
    const renderImages = (contentData, isLastImage = false) => {
        let count = 0;
        return contentData.content.map((block, index) => {
            // Check if it's an embedded asset block and has a valid URL
            if (block.nodeType === 'embedded-asset-block' && block.data?.target?.fields?.file?.url) {
                count++;
                // Logic to show first two images or images after the second
                if ((isLastImage && count > 2) || (!isLastImage && count <= 2)) {
                    return (
                        <img
                            key={index} // Unique key for list items
                            className={isLastImage ? 'last-image' : 'news-image'}
                            src={block.data.target.fields.file.url}
                            alt={`Article image ${index + 1}`} // Add meaningful alt text
                        />
                    );
                }
            }
            return null; // Don't render if not an image or doesn't meet criteria
        });
    };

    // Helper to render paragraphs within a content block
    const renderParagraphs = (contentData) => {
        return contentData.content.map((block, index) => {
            // Check if it's a paragraph node and has content
            if (block.nodeType === 'paragraph' && block.content) {
                return block.content.map((textNode, textIndex) => {
                    // Check if it's a text node and has a value
                    if (textNode.nodeType === 'text' && textNode.value) {
                        const className = textNode.marks && textNode.marks.some(mark => mark.type === 'bold') ? 'news-info-bold' : 'news-info';
                        return (
                            <p key={`${index}-${textIndex}`} className={className}>
                                {textNode.value}
                            </p>
                        );
                    }
                    return null; // Don't render if not a valid text node
                });
            }
            return null; // Don't render if not a valid paragraph node
        });
    };

    return (
        <div className="news-item">
            <div className="news-image">
                {renderImages(data)}
            </div>
            <div className="news-info">
                {renderParagraphs(data)}
            </div>
            <div>
                {renderImages(data, true)} {/* Pass true for last image logic */}
            </div>
        </div>
    );
};

// --- Main Component: Post ---
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null, // Initialize as null for clearer state
            loading: true, // Start as true since we're loading data
            error: null, // Add an error state
        };
        // Use a ref to store a reference to the scroll event listener function
        this.scrollListener = null;
    }

    componentDidMount() {
        // Initialize Google Analytics
        ReactGA.initialize('UA-174924337-1');
        // Track pageview, with a fallback if location isn't available from props
        if (this.props.location && this.props.location.pathname) {
            ReactGA.pageview(this.props.location.pathname);
        } else {
            console.warn("ReactGA: this.props.location.pathname is undefined. Using window.location.pathname fallback.");
            ReactGA.pageview(window.location.pathname);
        }

        this.getPostData();

        // Bind and store the scroll event listener
        this.scrollListener = this.handleScroll.bind(this);
        window.addEventListener("scroll", this.scrollListener);
    }

    componentWillUnmount() {
        // Crucially, remove the event listener to prevent memory leaks
        if (this.scrollListener) {
            window.removeEventListener("scroll", this.scrollListener);
        }
    }

    // Handle scroll events to reveal images
    handleScroll = () => {
        const images = document.getElementsByClassName('news-image');
        const currentScroll = window.pageYOffset;

        // Loop through all images and apply opacity if they are in view
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const offsetTop = image.offsetTop;
            const threshold = offsetTop - (window.innerHeight * 0.8); // Reveal when 80% of window height from top

            if (currentScroll >= threshold) {
                image.style.opacity = 1;
            }
        }
    };

    // Asynchronous function to fetch post data
    getPostData = async () => {
        this.setState({ loading: true, error: null }); // Reset error before fetching
        try {
            const res = await Axios.get(`/api/article/post/art/${this.props.match.params.slug}`);
            // Check if items array exists and has at least one item
            if (res.data && res.data.items && res.data.items.length > 0) {
                this.setState({
                    post: res.data.items[0],
                    loading: false,
                    // 'loaded' state is redundant as 'post !== null' implies it's loaded
                });
            } else {
                this.setState({
                    post: null,
                    loading: false,
                    error: "No post data found.",
                });
            }
        } catch (error) {
            console.error("Error fetching post data:", error);
            this.setState({
                loading: false,
                error: "Failed to load post. Please try again later.",
                post: null,
            });
        }
    };

    // Render the article title and author
    renderTitle = () => {
        const { post } = this.state;
        if (!post) return null; // Only render if post data is available

        return (
            <div className='header-container'>
                <h1 className='article-header'>
                    {post.fields.title}
                </h1>
                <div className='icon-author-container'>
                    <i className="las la-arrow-right"></i>
                    <label className='author-text'>Written By {post.fields.author}</label>
                </div>
            </div>
        );
    };

    // Render all content paragraphs dynamically
    renderContentBlocks = () => {
        const { post } = this.state;
        if (!post) return null;

        // Array of paragraph field names from your API response
        const paragraphFields = [
            post.fields.firstparagraph,
            post.fields.secondparagraph,
            post.fields.thirdparagraph,
            post.fields.fourthparagraph,
            post.fields.fifthparagraph,
            // Add other paragraph fields if they exist, e.g., post.fields.sixthparagraph
        ];

        // Filter out any undefined or null paragraphs and render ContentBlock for each
        return paragraphFields.filter(Boolean).map((paragraphData, index) => (
            <ContentBlock key={index} data={paragraphData} />
        ));
    };

    render() {
        const { loading, error, post } = this.state;

        if (loading) {
            return (
                <div className="post-wrapper">
                    <h1 className="loading-message">Loading post...</h1>
                </div>
            );
        }

        if (error) {
            return (
                <div className="post-wrapper">
                    <h1 className="error-message">{error}</h1>
                </div>
            );
        }

        // If not loading and no error, but post is still null (e.g., API returned empty array)
        if (!post) {
            return (
                <div className="post-wrapper">
                    <h1 className="no-post-message">No post found.</h1>
                </div>
            );
        }

        return (
            <div className="post-wrapper">
                {this.renderTitle()}
                <div className="news-list">
                    {this.renderContentBlocks()}
                </div>
            </div>
        );
    }
}

export default Post;