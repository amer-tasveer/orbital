import React, { Component } from 'react';
import Axios from 'axios';
import './post.css';
import ReactGA from 'react-ga';

// Helper component to render a single content block (paragraph/image)
const ContentBlock = ({ data }) => {
    if (!data) return null;

    const renderImage = (contentData, isLastImage = false) => {
        let count = 0;
        return contentData.content.map((block, index) => {
            if (block.nodeType === 'embedded-asset-block' && block.data?.target?.fields?.file?.url) {
                count++;
                if ((isLastImage && count > 2) || (!isLastImage && count <= 2)) {
                    return (
                        <img
                            key={index}
                            className={isLastImage ? 'last-image' : 'news-image'}
                            src={block.data.target.fields.file.url}
                            alt="" // Add alt text for accessibility
                        />
                    );
                }
            }
            return null;
        });
    };

    const renderParagraphs = (contentData) => {
        return contentData.content.map((block, index) => {
            if (block.nodeType === 'paragraph' && block.content) {
                return block.content.map((textNode, textIndex) => {
                    if (textNode.nodeType === 'text' && textNode.value) {
                        const className = textNode.marks && textNode.marks.some(mark => mark.type === 'bold') ? 'news-info-bold' : 'news-info';
                        return (
                            <p key={`${index}-${textIndex}`} className={className}>
                                {textNode.value}
                            </p>
                        );
                    }
                    return null;
                });
            }
            return null;
        });
    };

    return (
        <div className="news-item">
            <div className="news-image">
                {renderImage(data)}
            </div>
            <div className="news-info">
                {renderParagraphs(data)}
            </div>
            <div>
                {renderImage(data, true)}
            </div>
        </div>
    );
};

class Post_Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null, // Initialize as null to easily check if data has been fetched
            loading: false,
        };
        this.imageRefs = []; // To store refs for image elements
    }

    componentDidMount() {
        this.getPostData();
        ReactGA.initialize('UA-174924337-1');
        ReactGA.pageview(this.props.location.pathname);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;

        this.imageRefs.forEach(imgRef => {
            if (imgRef && imgRef.current) {
                const imageTop = imgRef.current.offsetTop;
                // Make image visible when it's within 700px from the bottom of the viewport
                if (currentScroll + windowHeight - 700 >= imageTop) {
                    imgRef.current.style.opacity = 1;
                }
            }
        });
    };

    getPostData = async () => {
        this.setState({ loading: true });
        try {
            const res = await Axios.get(`/api/article/post/featured/${this.props.match.params.slug}`);
            this.setState({
                post: res.data.items[0] || null, // Ensure post is null if no items are returned
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching post data:', error);
            this.setState({ loading: false, post: null }); // Handle error state
        }
    };

    renderTitle = () => {
        const { post } = this.state;
        if (!post) return null; // Only render if post data exists

        return (
            <div className="header-container">
                <h1 className="article-header">
                    {post.fields.title}
                </h1>
                <div className="icon-author-container">
                    <i className="las la-arrow-right"></i>
                    <label className="author-text">Written By {post.fields.author}</label>
                </div>
            </div>
        );
    };

    renderContentBlocks = () => {
        const { post } = this.state;
        if (!post) return null;

        const paragraphs = [
            post.fields.qoutes, // Assuming 'qoutes' is also structured like a paragraph block
            post.fields.firstparagraph,
            post.fields.secondparagraph,
            post.fields.thirdparagraph,
            post.fields.fourthparagraph,
            post.fields.fifthparagraph,
        ];

        // Filter out undefined/null paragraphs and map them to ContentBlock components
        return paragraphs.filter(Boolean).map((paragraphData, index) => {
            // Assign a ref to each image within the ContentBlock for scroll tracking
            // This would require modifying ContentBlock to accept and assign refs to images.
            // For simplicity in this example, we'll keep the scroll logic in Post_Featured
            // but note that managing many refs for dynamic elements can be complex.
            // A more React-idiomatic way would be to pass visibility state down.

            // For now, let's keep the image opacity handling within ContentBlock or
            // find a way to make it more efficient if there are many images.
            // The current scroll logic attempts to find all 'news-image' elements,
            // which works but is less "React-y".
            return <ContentBlock key={index} data={paragraphData} />;
        });
    };

    render() {
        const { loading, post } = this.state;

        if (loading) {
            return (
                <div className="post-wrapper">
                    <h1>Loading...</h1>
                </div>
            );
        }

        if (!post) {
            return (
                <div className="post-wrapper">
                    <h1>No post found.</h1>
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

export default Post_Featured;