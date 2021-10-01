import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby } from '../actions/hobby';

HomePage.propTypes = {};

function HomePage(props) {
    const hobbyList = useSelector((state) => state.hobby.list);
    const dispatch = useDispatch();
    console.log(hobbyList);

    const handleAddHobbyClick = () => {
        const newId = Math.random();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        };
        const action = addNewHobby(newHobby);
        dispatch(action);
    };
    return (
        <div>
            <h1>Redux hooks - home page</h1>

            <button onClick={handleAddHobbyClick}>add</button>
            <HobbyList hobbyList={hobbyList} />
        </div>
    );
}

export default HomePage;
