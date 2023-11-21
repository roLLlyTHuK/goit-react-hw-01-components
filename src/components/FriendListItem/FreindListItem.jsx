import PropTypes from 'prop-types';
import styles from  './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
      <li key={id} className={styles.listitem }>
      <div
        className={styles.status}
        style={{
          backgroundColor : isOnline ? "green" : "red",
        }}
      ></div>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};