import React from "react";

interface PageProps {
  params: { id: string };
}

const Page = async ({ params }: PageProps) => {
  const { id } = params;

  return <div>User details {id}</div>;
};

export default Page;
