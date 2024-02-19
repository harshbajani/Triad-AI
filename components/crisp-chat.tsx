"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("30135eac-bf21-4ef8-99de-b28c9b3d6e92");
  }, []);

  return null;
};
