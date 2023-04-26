import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { IoMdNotificationsOutline } from 'react-icons/io';


function BadgeNotification() {
    const [notifications, setNotifications] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        async function fetchNotifications() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1');
            setNotifications(response.data);
        }

        fetchNotifications();
    }, []);

    function Notification({ title, body }) {
        return (
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        );
    }

    Notification.propTypes = {
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    };

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="badge-notification">
            <div className="dropdown-wrapper">
                <IoMdNotificationsOutline size={
                    30
                } color='#135097' onClick={toggleDropdown} />
                {isDropdownOpen && notifications.length > 0 && (
                    <div className="dropdown-menu">
                        {notifications.map(notification => (
                            <Notification
                                key={notification.id}
                                title={notification.title}
                                body={notification.body}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BadgeNotification;
