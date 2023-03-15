import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onClickDelete }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onClickDelete={onClickDelete}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
