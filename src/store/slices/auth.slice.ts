import {createSlice} from '@reduxjs/toolkit';
import {ILinks, IMeta} from '../../utilities/common-interfaces';

export interface IUser {
  token: null | string;
  role: null | string;
  id: null | number;
  firstName: null | string;
  lastName: null | string;
  displayName: null | string;
  email: null | string;
  isApproved?: boolean;
}
export interface IUsers {
  data: IUser[];
  links?: ILinks;
  meta?: IMeta;
}

interface IUserState {
  user: IUser;
  users: IUsers;
}

const initialState: IUserState = {
  user: {
    token: null,
    role: null,
    id: null,
    firstName: null,
    lastName: null,
    displayName: null,
    email: null,
  },

  users: {
    data: [],
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      return state;
    },
    logout: (state) => {
      state.user = initialState.user;
      return state;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      return state;
    },
    setMoreUsers: (state, action) => {
      state.users.data = state.users.data.concat(action.payload.data);
      state.users.links = action.payload.links;
      state.users.meta = action.payload.meta;

      return state;
    },
    resetUsers: (state) => {
      state.users = initialState.users;
      return state;
    },
    addUser: (state, action) => {
      state.users.data = state.users.data.concat(action.payload);
      return state;
    },
    updateUser: (state, action) => {
      state.users = {...state.users, ...action.payload};
      return state;
    },
    deleteUser: (state, action) => {
      state.users.data = state.users.data.filter((user) => user?.id !== action.payload);
      return state;
    },
    updateUsers: (state, action) => {
      const newUser = action.payload as IUser;
      const newUsers = state.users.data.map((user) => {
        if (newUser.id === user.id) return newUser;
        return user;
      });
      state.users.data = newUsers;
      return state;
    },
  },
});
