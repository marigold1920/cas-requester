import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

export const selectToken = createSelector([selectCurrentUser], user => "Bearer " + user.token);

export const selectUsername = createSelector([selectCurrentUser], user => user.username);

export const selectUserId = createSelector([selectCurrentUser], user => user.id);

export const selectProfile = createSelector([selectUser], user => user.healthInformation);
