import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.UserMenu}>
      <span className={s.UserMenuText}>Welcome {name}!</span>
      <button
        type="button"
        className={s.UserMenuButton}
        onClick={() => dispatch(authOperations.logout())}
      >
        Log Out
      </button>
    </div>
  );
}
