let i = 0;
function id() {
  return i++;
}

const data = [
  {
    id: id(),
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "Japan.jpeg",
  },
  {
    id: id(),
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "27 May, 2021",
    endDate: "8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    imageUrl: "Australia.jpeg",
  },
  {
    id: id(),
    title: "Geirangerfjord",
    location: "NORWAY",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "Norway.jpeg",
  },
  {
    id: id(),
    title: "Eiffel Tower",
    location: "FRANCE",
    googleMapsUrl:
      "https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,17z/data=!3m2!4b1!5s0x47e66fe1ee0293a1:0x213fe992eb6cca0c!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu",
    startDate: "5 June, 2022",
    endDate: "10 June, 2022",
    description:
      "The Eiffel Tower is an iconic symbol of France and one of the most visited landmarks in the world. Standing at a height of 324 meters (1,063 feet), it offers breathtaking views of Paris from its observation decks. The tower was completed in 1889 and was initially criticized by some as an eyesore, but it has since become an enduring symbol of the city and a must-visit attraction for tourists.",
    imageUrl: "France.jpg",
  },
  {
    id: id(),
    title: "Colosseum",
    location: "ITALY",
    googleMapsUrl:
      "https://www.google.com/maps/place/Colosseum/@41.8902102,12.4922309,17z/data=!3m1!4b1!4m6!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!16zL20vMGQ1cXg?entry=ttu",
    startDate: "20 March, 2023",
    endDate: " 25 March, 2023",
    description:
      "The Colosseum, located in the heart of Rome, is an ancient amphitheater that once hosted gladiatorial contests, animal hunts, and other spectacles. It is one of the most impressive examples of Roman architecture and engineering, with a seating capacity of up to 50,000 spectators. Today, the Colosseum stands as a powerful symbol of the Roman Empire's grandeur and is a major tourist attraction in Italy.",
    imageUrl: "Italy.jpg",
  },
  {
    id: id(),
    title: "Times Square",
    location: "UNITED STATES",
    googleMapsUrl:
      "https://www.google.com/maps/place/Times+Square+Group+S.r.l./@41.8250135,12.5044152,17z/data=!3m1!4b1!4m6!3m5!1s0x13258bb50724cab3:0x636708f6f71ee577!8m2!3d41.8250135!4d12.5044152!16s%2Fg%2F11bzs5qwwr?entry=ttu",
    startDate: "1 July, 2020",
    endDate: "5 July, 2020",
    description: `Times Square is a vibrant and bustling commercial intersection in the heart of Manhattan, New York City. Known for its towering billboards, dazzling neon lights, and bustling crowds, it is often referred to as "The Crossroads of the World."Times Square is famous for its New Year's Eve ball drop celebration and is a hub for entertainment, shopping, and Broadway shows, making it a must-visit destination for tourists from around the world.`,
    imageUrl: "USA.jpg",
  },
];

export default data;
