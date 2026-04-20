import { formatMoney } from "@/config/money";
import Image from "next/image";
import React, { useState } from "react";

export const UserRow = ({
  userName,
  relationship,
  amount,
  date,
  userState,
  userImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuANFOPDICk8UKc5W6kBO2wq02SpMV62o_2gs898YQYa7Uge4FpCZ2Vain2R6uSGTtmblZmCSJ6qNoulXvSnEAMql4rkWojRKFDegV3M2qJcr5lJJ5PuPFs44pBDpKp65ZbyGd8srFDrnIZKs8S6dI86CmdI0FRcItDSR6LCGy2_ZtGZJAwjvGz56KipHW7tq1Ir-DKL_4iz0NxUDZhxwa6biFTS4WcrH3ifqDMqtgNwmQO_CixlVItl4ymbZ7WNkGdsr2Bw4FG4Hg",
}) => {
  return (
    <tr className="hover:bg-surface-container-low/30 transition-colors group animate-slide-in-left">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <Image
              alt="Ricardo"
              className="w-12 h-12 rounded-full object-cover"
              src={userImg}
              width={500}
              height={500}
            />
            {userState && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-surface-container-lowest rounded-full" />
            )}
          </div>
          <div>
            <p className="font-bold text-on-surface group-hover:text-primary transition-colors">
              {userName}
            </p>
            <p className="text-xs text-on-surface-variant font-medium">
              {relationship}
            </p>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <p className="text-lg font-bold text-on-surface">
          {formatMoney(amount)}
        </p>
      </td>
      <td className="px-8 py-6 text-on-surface-variant font-medium">{date}</td>
      <td className="px-8 py-6 text-right">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold  ${!userState && "bg-yellow-100 text-yellow-700"} `}
        >
          <span
            className={`w-1.5 h-1.5 bg-green-500 rounded-full ${!userState && "bg-yellow-500"}`}
          />
          {userState ? "Confirmado" : "Pendiente"}
        </span>
      </td>
    </tr>
  );
};
