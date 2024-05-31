import { create } from "zustand";

interface CompanyObject {
  name: string;
}

interface AddressObject {
  street: string;
  suite: string;
  city: string;
}

export interface UserObject {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: CompanyObject;
  address: AddressObject;
}

type UserStore = {
  userList: any;
  user: UserObject;
  dialogOpened: boolean;
  handleDialog: () => void;
  selectUser: (user: UserStore["user"]) => void;
  setUsers: (userList: UserStore["userList"]) => void;
  deleteUser: (userList: UserStore["userList"]) => void;
  addUser: (userList: UserStore["userList"]) => void;
};

export const useStoreUser = create<UserStore>((set) => ({
  userList: [],
  user: {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "" },
    address: {
      street: "",
      suite: "",
      city: "",
    },
  },
  dialogOpened: false,
  handleDialog: () => set((state) => ({ dialogOpened: !state.dialogOpened })),
  selectUser: (User) => set(() => ({ user: User })),
  setUsers: (User) => set(() => ({ userList: User })),
  deleteUser: (User) =>
    set((state) => ({
      userList: state.userList.filter((e: any) => e !== User),
    })),
  addUser: (User) =>
    set((state) => ({
      userList: [...state.userList, User],
    })),
}));
