import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

export default function Student() {
  const { studentId } = useParams();

  return <>{studentId ? `Hello ${studentId}` : "No user selected"}</>;
}
