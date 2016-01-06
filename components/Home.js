import React from 'react';
import ArticleList from './ArticleList';

class Home extends React.Component {
    
	constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
            	<ArticleList context={this.context} initialArticleAmount={2} />
            </div>
        );
    }
}

Home.contextTypes = {
  executeAction: React.PropTypes.func,
  getStore: React.PropTypes.func
}

export default Home;
