import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";

const DeveloperLinks = ({ sidebar }) => {
    if (!sidebar) return null;
    return (
        <ul>
            <li className='dev-info flex'>
                <a href="https://leon-i.github.io/" target="_blank">
                    <p>Isak Leon</p>
                </a>
                <section className='dev-links flex'>
                    <a href="https://github.com/leon-i" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/isak-leon-4924901a9/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.angel.co/u/isak-leon" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                </section>
            </li>
            <li className='dev-info flex'>
                <a href="https://ivangit911.github.io/" target="_blank">
                    <p>Ivan Wang</p>
                </a>
                <section className='dev-links flex'>
                    <a href="https://github.com/IvanGit911" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/han-ivan-wang-883855126/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://angel.co/u/ivan-wang-14" target="_blank">
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>  
                </section>
                
            </li>
            <li className='dev-info flex'>
                <a href="https://andrewyoo94.github.io/" target="_blank">
                    <p>Andrew Yoo</p>
                </a>
                <section className='dev-links flex'>
                    <a href="https://github.com/andrewyoo94" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/andrewyoo94/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </section>
            </li>
            <li className='dev-info flex'>
                <a href="https://sjpk1223.github.io/" target="_blank">
                    <p>Joshua Park</p>
                </a>
                <section className='dev-links flex'>
                    <a href="https://github.com/sjpk1223" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </section>
            </li>
        </ul>
    )
};

const mapStateToProps = ({ ui: { sidebar } }) => ({
    sidebar
});

export default connect(mapStateToProps, null)(DeveloperLinks);
