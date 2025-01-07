"use client";
import { useParams } from "next/navigation";
import SecHeaderBack from "@/components/header/SecHeaderBack/SecHeaderBack";
import Details from "../comp/GuideDetails/Details/Details";

export default function GuideCardDetails() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <SecHeaderBack />
      <Details />
    </>
  );
}
