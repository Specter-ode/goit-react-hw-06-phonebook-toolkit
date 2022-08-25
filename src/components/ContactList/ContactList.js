import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number, gender }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            {name}({gender}): {number}
          </p>
          <button className={s.btn} type="button" onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
