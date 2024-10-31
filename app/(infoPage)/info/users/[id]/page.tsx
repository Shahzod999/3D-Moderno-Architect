import React from "react";

interface PageProps {
  params: { id: string };
}

type tParams = Promise<{ params: { id: string } }>;

const Page = async({ params }: tParams) => {
  const { id } =  await params;

  return <div>User details {id}</div>;
};

export default Page;
