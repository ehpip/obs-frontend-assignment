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
  userList: () => Promise<void>;
  user: UserObject;
  dialogOpened: boolean;
  handleDialog: () => void;
  selectUser: (user: UserStore["user"]) => void;
};

export const useStoreUser = create<UserStore>((set) => ({
  userList: async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );

    return data;
    // .then(async (json) => {
    //   const data = await json.json();
    //   return set(() => ({ userList: data }));
    // });
  },
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
}));
