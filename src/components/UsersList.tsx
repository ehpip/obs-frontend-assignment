/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

"use client";

import { UserObject, useStoreUser } from "@/app/store";
import { useEffect } from "react";
import DialogUser from "./DialogUser";
import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import AddUser from "./AddUser";

const UsersList = () => {
  const setUsers = useStoreUser((state) => state.setUsers);
  const userList = useStoreUser((state) => state.userList);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleDialog = useStoreUser((state) => state.handleDialog);
  const handleUser = useStoreUser((state) => state.selectUser);

  return (
    <div className="w-full flex justify-center p-5 md:p-10 mt-20">
      <div className="max-w-7xl flex w-full items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 w-full">
          <div className="flex justify-between sm:col-span-2 md:col-span-3 ">
            <p className="font-semibold text-3xl">User List</p>
            <AddUser />
          </div>
          {userList.map((user: UserObject, index: React.Key) => {
            return (
              <button
                key={index}
                onClick={() => {
                  handleDialog();
                  handleUser(user);
                }}
                className="hover:shadow-xl rounded-xl transition-shadow relative"
              >
                <Card sx={{ borderRadius: 3, height: "100%" }}>
                  <CardMedia
                    sx={{ height: 100 }}
                    component="img"
                    image="https://picsum.photos/720"
                    alt="user image"
                  />
                  <CardContent>
                    <div className="flex justify-between mt-16 relative">
                      <div className="absolute -top-36">
                        <div className="rounded-full w-32 h-32 overflow-hidden relative">
                          <img src="https://picsum.photos/720" alt="image" />
                        </div>
                      </div>
                      <p className="font-medium text-xl text-start">
                        {user.name}
                      </p>
                      <Chip label={user.username} />
                    </div>

                    <p className="lowercase text-slate-500 text-start">
                      {user.email}
                    </p>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      </div>
      <DialogUser />
    </div>
  );
};

export default UsersList;
