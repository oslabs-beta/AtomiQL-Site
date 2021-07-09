import React from 'react';
import labels from './../assets/labels.js';
import Profile from './../components/Profile.jsx';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                {labels.team.title}
                <div className="team">
                    {labels.team.members.map((member) => 
                        <Profile photo={member.photo}
                            name={member.name}
                            github={member.github}
                            title={member.title}
                            githubURL={member.githubURL}
                            linkedinURL={member.linkedinURL}
                        />
                    )}
                </div>
                <div className="footer-links">
                    {labels.footer.linkSections.map((section, el) => 
                        <div className="footer-link-section">
                            {section}
                            {labels.footer.links[el].map((link) => 
                                <a href={link.linkURL}>{link.title}</a>
                            )}
                        </div>
                    )}
                </div>
                <div className="footer-copyright">
                    {labels.footer.copyright}
                </div>
            </div>
        )
    }
}

export default Footer;