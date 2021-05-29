import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => (
  <div className={styles.ContactList}>
    <h3 className={styles.ContactList__title}>Contact List</h3>
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.ContactList__item}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onClick={onClick}
            />
          </li>
        );
      })}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }),
  ).isRequired,
};

export default ContactList;
