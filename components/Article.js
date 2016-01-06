import React from 'react';

class Article extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.articleContent}</p>
                <img src={this.props.articleImg} alt={this.props.articleContent} />
            </div>
        );
    }
}

export default Article;
