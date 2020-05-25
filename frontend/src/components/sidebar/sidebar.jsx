import React from 'react';
import { connect } from 'react-redux';
import { openDeveloperLinks, closeDeveloperLinks } from '../../actions/sidebar_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import DeveloperLinks from './developer_links';
import '../../stylesheets/sidebar.css';

const Sidebar = ({sidebar, openDeveloperLinks, closeDeveloperLinks}) => {
    const action = sidebar ? () => closeDeveloperLinks() : () => openDeveloperLinks();
    const icon = sidebar ? faCaretUp : faCaretDown;
    const devTabClass = sidebar ? 'dev-tab flex open' : 'dev-tab flex';
    return (
        <div className='sidebar'>
            <ul className='about-links'>
                <li className={devTabClass} onClick={action}>
                    <p>Developers</p>
                    <FontAwesomeIcon icon={icon} className='caret-icon' />
                </li>
            </ul>
            <DeveloperLinks />
        </div>
    )
};

const mapStateToProps = ({ ui: { sidebar } }) => ({
    sidebar
});

const mapDispatchToProps = dispatch => ({
    openDeveloperLinks: () => dispatch(openDeveloperLinks()),
    closeDeveloperLinks: () => dispatch(closeDeveloperLinks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
