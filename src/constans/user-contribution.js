import { defaultDate } from "@/config/dates";

const IMG_DEFAUL = "/family-img/Default.png";

const DEFAUL_DATE = "2026,04,18";

export const USER_CONTRIBUTION = [
  {
    id: 1,
    userName: "Juan Salazar",
    relationship: "Sobrino",
    amount: 50000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: "/family-img/Juan-salazar.png",
  },

  {
    id: 2,
    userName: "Jose Andulce",
    relationship: "Hijo",
    amount: 150000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: IMG_DEFAUL,
  },

  {
    id: 3,
    userName: "Daylon Andulce",
    relationship: "Sobrino",
    amount: 100000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: "/family-img/Daylon-andulce.png",
  },
  {
    id: 4,
    userName: "Libar Alegria",
    relationship: "Hijo",
    amount: 50000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: "/family-img/Libar-alegria.png",
  },
  {
    id: 5,
    userName: "Yobile Alegria",
    relationship: "Hijo",
    amount: 50000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: "/family-img/Yobile-alegria.png",
  },
  {
    id: 6,
    userName: "Seneida",
    relationship: "Hermana",
    amount: 100000,
    date: defaultDate(DEFAUL_DATE),
    userState: true,
    userImg: IMG_DEFAUL,
  },
];

export const WALLET = USER_CONTRIBUTION.reduce((a, b) => a + b.amount, 0);
