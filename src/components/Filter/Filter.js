import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { contactsActions, contactsSelectors } from "../../redux/contacts";
import s from "./Filter.module.css";

export default function Filter() {
  const filterInputId = uuidv4();
  const filterValue = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = (e) =>
    dispatch(contactsActions.changeFilterAction(e.target.value));

  return (
    <div className={s.FilterOverlay}>
      <label htmlFor={filterInputId} className={s.FilterLabel}>
        Find contacts by name
      </label>
      <input
        className={s.FilterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChangeFilter}
        id={filterInputId}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};