import React from 'react';
import labels from './../../public/assets/labels.js';

class About extends React.Component {
    render() {
        return (
            <div id="about">
                {labels.about}
            </div>
        )
    }
}

export default About;