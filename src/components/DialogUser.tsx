import { useStoreUser } from "@/app/store";
import { Dialog, DialogTitle } from "@mui/material";
import Link from "next/link";

const DialogUser = () => {
  const open = useStoreUser((state) => state.dialogOpened);
  const user = useStoreUser((state) => state.user);
  const handleClose = useStoreUser((state) => state.handleDialog);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-5">
        <p className="text-xl font-medium">User&apos;s Details</p>
        <div className="grid grid-cols-2 pt-2">
          <p>ID :</p>
          <p>{user.id}</p>
          <p>Name :</p>
          <p>{user.name}</p>
          <p>Username :</p>
          <p>{user.username}</p>
          <p>Email :</p>
          <p>{user.email}</p>
          <p>Phone :</p>
          <p>{user.phone}</p>
          <p>Website :</p>
          <Link href={user.website} target="_blank">
            {user.website}
          </Link>
          <p>Company :</p>
          <p>{user.company.name}</p>
          <p>Address :</p>
          <p>
            {user.address.street} {user.address.suite}
          </p>
          <p>City :</p>
          <p>{user.address.city}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogUser;
