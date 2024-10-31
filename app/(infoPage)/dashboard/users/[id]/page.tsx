import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>User details {id}</div>;
};

export default page;
