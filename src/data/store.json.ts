export interface Template {
  name: string;
  description: string;
  image: string;
  link: string;
};

const tatarski_beefsteak: Template = {
  name: "Tatarski beefsteak",
  description: "14,00 € / 105 kn",
  image: "/images/2tatarski.jpg",
  link: "/rezervacija",
};
const baby_sipe: Template = {
  name: "Pržene baby sipice na maslinovom ulju",
  description: "9,50 € / 71,50 kn ",
  image: "/images/3babysipe.jpg",
  link: "/rezervacija",
};
const prsut_iberico: Template = {
  name: "Premium pršut Iberico (100 grama)",
  description: "16,00 € / 120,55 kn",
  image: "/images/6prsut.jpg",
  link: "/rezervacija",
};
const dimljeni_norveski_losos: Template = {
  name: "Hladno dimljeni norveški losos",
  description: "10,00 € / 75,35 kn",
  image: "/images/8losos.jpg",
  link: "/rezervacija",
};
const jadranska_hobotnica_na_salatu: Template = {
  name: "Jadranska hobotnica na salatu s brunoise jabukama",
  description: "15,00 € / 113 kn",
  image: "/images/hobotnica.jpg",
  link: "/rezervacija",
};
const dry_age_steak: Template = {
  name: "Dry age T-Bone steak (1kg), domaća farma Sveti Petar Ludbreški, slobodan uzgoj stoke",
  description: "100 € / 753 kn",
  image: "/images/tbone.jpg",
  link: "/rezervacija",
};
const juneci_obrazi_pasticada: Template = {
  name: "Pašticada od junećih obraza s domaćim njokima",
  description: "11,00 € / 82,88 kn",
  image: "/images/22pasta.jpg",
  link: "/rezervacija",
};

const bbq_rebarca: Template = {
  name: " BBQ svinjska rebra, coleslaw salata, prženi krumpirići ",
  description: "13,00 € / 97,95 kn",
  image: "/images/bbq.jpg",
  link: "/rezervacija",
};

const jadranske_lignje: Template = {
  name: "Jadranske lignje žar (kilogram)",
  description: "50,50 € / 380 kn",
  image: "/images/jlignje.jpg",
  link: "/rezervacija",
};
const svjeza_jadranska_riba: Template = {
  name: "Bijela, divlja, svježa jadranska riba po ulovu (kilogram) ",
  description: "75 € / 565 kn",
  image: "/images/riba.jpg",
  link: "/rezervacija",
};
const skampi: Template = {
  name: "Jadranski škampi (žar, buzara, na ražnjiću, rižoto, tartar) (kilogram) ",
  description: "75 € / 565 kn",
  image: "/images/skampi.jpg",
  link: "/rezervacija",
};


export const byname = {
  
  tatarski_beefsteak,
  baby_sipe,
  prsut_iberico,
  dimljeni_norveski_losos,
  jadranska_hobotnica_na_salatu,
  dry_age_steak,
  juneci_obrazi_pasticada,
  bbq_rebarca,
  jadranske_lignje,
  svjeza_jadranska_riba,
  skampi
};
export const store = Object.values(byname);
