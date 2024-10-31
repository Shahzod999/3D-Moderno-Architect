"use client"
import { modalToggleStatus, selectedStatusModal } from "@/lib/features/modalCardToggleSlice";
import { useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch()
  const user = useAppSelector(selectedStatusModal);

  console.log(user);

  const handleClick = () =>{
    dispatch(modalToggleStatus())
  }

  return (
    <div>
      <span onClick={handleClick}>aassa</span>
      <Link href="/about">Go to About</Link>
    </div>
  );
};

export default page;
