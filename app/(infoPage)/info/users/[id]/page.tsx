import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  const { id } = params;
  return <div>User details {id}</div>;
};

export default Page;
