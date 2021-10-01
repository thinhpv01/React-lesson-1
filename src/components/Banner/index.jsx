import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string,
};

function Banner({ title = '', backgroundUrl = '' }) {
    const bannerStyle = backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {};
    console.log(bannerStyle);
    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    );
}

export default Banner;
