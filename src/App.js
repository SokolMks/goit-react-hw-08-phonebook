import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router";
import { authOperations, authSelectors } from "./redux/auth";
import AppBar from "./components/AppBar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const LogInView = lazy(() => import("./views/LogInView"));
const PhoneBookView = lazy(() => import("./views/PhoneBookView"));
const SignUpView = lazy(() => import("./views/SignUpView"));
const paths = {
  home: "/",
  register: "/register",
  login: "/login",
  contacts: "/contacts",
};

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />

      {!isFetchingCurrentUser && (
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path={paths.home}>
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path={paths.register} >
              <SignUpView />
            </PublicRoute>
            <PublicRoute exact path={paths.login} redirectTo={paths.contacts} restricted>
              <LogInView />
            </PublicRoute>
            <PrivateRoute path={paths.contacts} redirectTo={paths.login}>
              <PhoneBookView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </>
  );
}