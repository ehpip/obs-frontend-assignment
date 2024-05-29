/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardMedia } from "@mui/material";

const UserDetail = ({ data }: { data: { name: string } }) => {
  return (
    <div className="w-full flex justify-center p-5 md:p-10 mt-20">
      <div className="max-w-7xl flex w-full items-center">
        <Card sx={{ width: "100%", borderRadius: 3 }}>
          <CardMedia
            sx={{ height: 300 }}
            component="img"
            image="https://picsum.photos/1080"
            alt="user image"
          />
          <CardContent>
            <div className="flex justify-between mt-16 relative">
              <div className="absolute -top-60 left-1/2 -translate-x-1/2 shadow-xl rounded-full">
                <div className="rounded-full w-60 h-60 overflow-hidden relative">
                  <img src="https://picsum.photos/720" alt="image" />
                </div>
              </div>
              <p className="sm:col-span-2 md:col-span-3 font-semibold text-3xl">
                User Detail
              </p>
              <p>{data.name}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
