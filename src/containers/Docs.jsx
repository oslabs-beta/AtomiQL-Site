import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import labels from './../../public/assets/labels.js';

class Docs extends React.Component {
    render() {
        return (
            <Router basename="/docs">
                <div id="top">
                    <div id="docs-nav">
                        {labels.docs.nav.map((item) =>
                            <p>
                                <HashLink to={"/" + item.toLowerCase().replaceAll(' ', '-') + "#top"}>
                                    {item}
                                </HashLink>
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