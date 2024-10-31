import React from "react";
interface PageProps {
  params: { id: any };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;
  console.log(typeof id);

  return <div>User details {id}</div>;
};

export default Page;
