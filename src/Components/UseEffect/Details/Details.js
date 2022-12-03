import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal/Modal';
import Loader from '../../Loader/Loader';
import UserAvatar from './UserAvatar/UserAvatar';
import Ul from '../Ul/Ul';
import Li from '../Ul/Li/Li';

function Details(props) {
    const {info} = props;
    const [userProfile, setUserProfile] = useState(info);
    const [isLoading, setLoading] = useState(false);

    useEffect((id) => {
        setLoading(true);

        (async (id) => {
            try {
                const response = await fetch(`${process.env.REACT_APP_USER_INFO_PREURL}${id}.json`);
                if (!response.ok) {
                    console.error(new Error(response.statusText));
                }
                
                try {
                    const userInfo = await response.json();
                    setUserProfile(userInfo);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        })(info.id);

    },[info]);

    const detailsList = [];
    for (let key in userProfile.details) {
        detailsList.push(<Li key={key}><p>{`${key}: ${userProfile.details[key]}`}</p></Li>)
    }

  return (
    <div className='details'>
        {isLoading && <Modal><Loader/></Modal>}
        <Ul className={'detail-list'}>
            <Li className='avatar'>
                <UserAvatar src={userProfile.avatar} alt={userProfile.name}/>
            </Li>
            <Li className='username'><p>{userProfile.name}</p></Li>
            {detailsList}
        </Ul>
    </div>
  )
}

Details.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }
    ).isRequired,
}

export default Details
