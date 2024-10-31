import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  return <div>User details {id}</div>;
};

export default page;
