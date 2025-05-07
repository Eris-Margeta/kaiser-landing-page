export interface Template {
  name: string;
  description: string;
  image: string;
  link: string;
};
 const pasticada_od_jetrice: Template = {
  name: "Pašteta od domaće pileće jetre sa džemom od 4 vrste luka",
  description: "7,00 € / 53,50 kn",
  image: "/images/1pileca_pasteta.jpg",
  link: "/rezervacija",
};

export const byname = {
  pasticada_od_jetrice
};
export const storefirst = Object.values(byname);
