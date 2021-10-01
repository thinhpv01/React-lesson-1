// import Banner from 'components/Banner';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector } from 'react-redux';
MainPage.propTypes = {};

function MainPage(props) {
    const photos = useSelector((state) => state.photos);
    console.log('123', photos);
    return (
        <div>
            <Banner title="your awesome photos" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;
