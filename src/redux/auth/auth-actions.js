import { createAction } from "@reduxjs/toolkit";

export const usersSignUpAction = createAction("auth/register");
export const usersLoginAction = createAction("auth/login");
export const usersLogoutAction = createAction("auth/logout");
export const usersfetchCurrentUserAction = createAction("auth/refresh");
