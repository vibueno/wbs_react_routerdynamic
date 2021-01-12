import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

export default function Results() {
  const { studentName } = useParams();

  return <>{`No results for ${studentName}`}</>;
}
