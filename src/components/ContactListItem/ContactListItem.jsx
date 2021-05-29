import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';

const ContactListItem = ({ name, number, id, onClick }) => (
  <>
    <p className={styles.ContactList__name}>{name}</p>
    <p className={styles.ContactList__phone}>{number}</p>

    <IconContext.Provider
      value={{
        color: 'inherit',
        size: '1.2rem',
        className: 'global-class-name',
        title: 'delete',
      }}
    >
      <div onClick={() => onClick(id)}>
        <MdDelete className={styles.ContactList__icon} />
      </div>
    </IconContext.Provider>
  </>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
