import Fluxible from 'fluxible';
import Application from './components/Application';

import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import ArticleStore from './stores/ArticleStore';


import Fetchr from 'fluxible-plugin-fetchr';

const fetchrInstance = Fetchr({
	xhrPath: '/api'
});

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

app.plug(fetchrInstance);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(ArticleStore);

module.exports = app;
