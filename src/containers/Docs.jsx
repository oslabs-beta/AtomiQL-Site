import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, react_router_dom } from "react-router-dom";
import labels from './../../public/assets/labels.js';

class Docs extends React.Component {
    render() {
        return (
            <Router>
                <div id="top">
                    <div id="docs-nav">
                        {labels.docs.nav.map((item) =>
                            <p>
                                <Link to={"/" + item.toLowerCase().replaceAll(' ', '-')}>
                                    {item}
                                </Link>
                            </p>
                        )}
                    </div>
                    <div id="docs-content">
                        <Switch>
                            {labels.docs.nav.map((item, el) =>
                                <Route path={"/" + item.toLowerCase().replaceAll(' ', '-')}>
                                    <div id={item.toLowerCase().replaceAll(' ', '-')}>
                                        {labels.docs.content[el].map((section) =>
                                            <div className={section.type}>
                                                {section.text}
                                            </div>
                                        )}
                                    </div>
                                </Route>
                            )}
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Docs;