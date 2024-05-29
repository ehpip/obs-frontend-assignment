// import UserDetail from "@/components/UserDetail";
// import React from "react";

// async function getData(id: string) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// const page = async ({ params }: { params: { id: string } }) => {
//   const data = await getData(params.id);

//   return (
//     <div className="min-h-screen flex flex-col">
//       <UserDetail data={data} />;
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
