import { useStoreUser } from "@/app/store";
import FormProvider from "@/utils/FormProvider";
import RHFTextField from "@/utils/RHFTextField";
import { Button, Dialog, DialogContent } from "@mui/material";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const addUser = useStoreUser((state) => state.addUser);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const defaultValues = useMemo(
    () => ({
      id: uuidv4(),
      name: "",
      email: "",
      username: "",
      phone: "",
      website: "",
      company: "",
      address: "",
      city: "",
    }),
    []
  );

  const methods = useForm({
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit((data) => {
    addUser({
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.address,
        suite: "Apt. 556",
        city: data.city,
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: data.phone,
      website: data.website,
      company: {
        name: data.company,
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
    console.log({
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
      address: {
        street: data.address,
        suite: "Apt. 556",
        city: data.city,
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: data.phone,
      website: data.website,
      company: {
        name: data.company,
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
    reset();
    handleClose();
  });

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add User
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogContent>
          <div className="flex flex-col gap-3 w-full">
            <h2 className="font-semibold text-xl col-span-2">Add User</h2>
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <div className="grid grid-cols-2 gap-3 w-full">
                <RHFTextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="website"
                  label="Website"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="company"
                  label="Company"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="address"
                  label="Address"
                  variant="outlined"
                  fullWidth
                />
                <RHFTextField
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                />
                <Button
                  variant="contained"
                  className="col-span-2"
                  type="submit"
                >
                  Add User
                </Button>
              </div>
            </FormProvider>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUser;
