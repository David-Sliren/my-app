"use client";
import { formatMoney } from "@/config/money";
import { useUserQueryAll } from "@/hooks/tanstack/query/useQueryUser";
import { LuBriefcaseMedical, LuUsersRound, LuWallet } from "react-icons/lu";

const StatCard = ({ icon: IconName, title, text }) => {
  return (
    <div className="bg-surface-container-lowest p-8 rounded-[2rem] tonal-shadow-sm flex flex-col justify-between h-48 animate-slide-in-right timeline-view animate-range-early-entry">
      <span className="material-symbols-outlined text-primary text-3xl">
        {IconName}
      </span>
      <div>
        <h3 className="text-on-surface-variant capitalize font-medium text-sm tracking-wide">
          {title}
        </h3>
        <p className="text-2xl capitalize text-gray-950 font-bold">{text}</p>
      </div>
    </div>
  );
};

export const Stats = () => {
  const { data } = useUserQueryAll();

  const wallet =
    data?.reduce((acc, item) => acc + item?.totalContributed, 0) ?? 0;

  const countUsersActive =
    data?.filter((item) => item?.contributions.length > 0).length ?? 0;

  const STAT_CARD = [
    {
      iconName: <LuBriefcaseMedical />,
      title: "Persona al cuidado",
      more: "santa barbara",
    },
    {
      iconName: <LuUsersRound />,
      title: "Colaboradores Activos",
      more:
        countUsersActive === 1
          ? countUsersActive + " Familiar"
          : countUsersActive + " Familiares",
    },

    {
      iconName: <LuWallet />,
      title: "Fondo Disponible",
      more: `${formatMoney(wallet)}`,
    },
  ];

  return (
    <section className="py-12 px-6 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {STAT_CARD.map((item, i) => (
          <StatCard
            key={item.title}
            icon={item.iconName}
            title={item.title}
            text={item.more}
          />
        ))}
      </div>
    </section>
  );
};
