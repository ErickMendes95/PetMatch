"use client";
import { PetData } from "@app/types/types";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PetCardProps } from "@app/types/types";

const PetPage: React.FC<PetCardProps> = ({pet}) => {

  return (
    <div className="text-center">
      <h1 className="text-black text-4xl mt-10"></h1>
    </div>
  );
}

export default PetPage