import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onClickDelete }) => (
  <li className={css.contactItem}>
    {name}: {number}
    <button className={css.deleteButton} onClick={() => onClickDelete(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
