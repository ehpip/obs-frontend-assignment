import { useStoreUser } from "@/app/store";
import { Dialog, DialogTitle, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

const DialogUser = () => {
  const open = useStoreUser((state) => state.dialogOpened);
  const user = useStoreUser((state) => state.user);
  const handleClose = useStoreUser((state) => state.handleDialog);
  const deleteUser = useStoreUser((state) => state.deleteUser);

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium">User&apos;s Details</p>
          <Tooltip title="Delete User">
            <IconButton
              onClick={() => {
                deleteUser(user);
                handleClose();
              }}
            >
              <FaTrash size={20} />
            </IconButton>
          </Tooltip>
        </div>
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
          <p>{user.address.street}</p>
          <p>City :</p>
          <p>{user.address.city}</p>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogUser;
