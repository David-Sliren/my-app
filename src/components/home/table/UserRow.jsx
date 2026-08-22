import { defaultDate } from "@/config/dates";
import { formatMoney } from "@/config/money";
import { blurColors } from "@/constants/bgBase64";
import { DEFAULT_IMG } from "@/constants/forDefault";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const UserRow = ({
  id,
  userName,
  relationship,
  amount,
  date,
  userState,
  userImg = "/family-img/Default.png",
}) => {
  const rowFormatDate = defaultDate(date);
  return (
    <tr className="hover:bg-surface-container-low/30 transition-colors group animate-slide-in-left">
      <td className="px-8 py-6">
        <Link href={`/profile/${id}`}>
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <Image
                alt={userName}
                className="w-12 h-12 rounded-full object-cover"
                src={userImg ? userImg : DEFAULT_IMG}
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={blurColors.purple}
              />
              <div
                className={clsx(
                  "absolute -bottom-1 -right-1 w-4 h-4 border-2 border-surface-container-lowest rounded-full",
                  {
                    "bg-green-500": userState == "confirmado",
                    "bg-yellow-500": userState == "pendiente",
                  },
                )}
              />
            </div>
            <div className="min-w-full">
              <p className="font-bold text-on-surface group-hover:text-primary capitalize transition-colors">
                {userName}
              </p>
              <p className="text-xs text-on-surface-variant font-medium">
                {relationship}
              </p>
            </div>
          </div>
        </Link>
      </td>
      <td className="pl-8 py-6 align-text-top">
        <p className="text-lg font-bold text-on-surface">
          {formatMoney(amount)}
        </p>
      </td>
      <td className="pl-8 py-6 text-on-surface-variant capitalize font-medium align-text-top">
        {rowFormatDate}
      </td>
      <td className="pl-8 py-6 text-right align-text-top">
        <span
          className={clsx(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs capitalize font-bold",
            {
              "bg-yellow-100 text-yellow-700": userState == "pendiente",
              "bg-green-100 text-green-700": userState == "confirmado",
            },
          )}
        >
          <span
            className={clsx("w-1.5 h-1.5 bg-green-500 rounded-full", {
              "bg-yellow-500": userState == "pendiente",
              "bg-green-500": userState == "confirmado",
            })}
          />
          {userState}
        </span>
      </td>
    </tr>
  );
};
