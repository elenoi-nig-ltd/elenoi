export type Leader = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
};

export const directors: Leader[] = [
  {
    slug: "oije-israel-elijah",
    name: "Oije Israel Elijah",
    role: "Executive Director",
    image: "/images/leadership/oije-israel-elijah.jpg",
  },
  {
    slug: "oziegbe-happiness-eghonghon",
    name: "Oziegbe Happiness Eghonghon",
    role: "Executive Director",
    image: "/images/leadership/oziegbe-happiness-eghonghon.jpg",
  },
];

export const boardSecretary: Leader = {
  slug: "nehemiah-o-odagboyi",
  name: "Nehemiah O. Odagboyi",
  role: "Secretary to the Board",
  image: "/images/leadership/nehemiah-o-odagboyi.svg",
};

export const companyRegistration = "RC No. 7201964";
