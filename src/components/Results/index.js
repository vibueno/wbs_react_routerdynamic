import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

export default function Results() {
  const { studentName } = useParams();

  return (
    <>{studentName ? `No results for ${studentName}` : "No user selected"}</>
  );
}
