import PropTypes from 'prop-types';
import css from 'components/ContactItem/ContacItem.module.css';

export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div className={css.item}>
      <p>{name}:</p>
      <p>{number}</p>

      <button className={css.delete} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
