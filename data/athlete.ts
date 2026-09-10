export type Result = {
  date: string;
  age: string;
  meet: string;
  position: number;
  height: number;
  pb?: boolean;
};


export const athlete = {
  name: "Sandil Dilmeth Hetti Arachchige",
  shortName: "Sandil Hetti Arachchige",

  event: "High Jump",
  category: "U18 Sri Lanka",
  classYear: "Class of 2027",
  location: "Colombo, Sri Lanka",

  // CURRENT PERFORMANCE
  personalBest: "2.06 m",
  personalBestImperial: "6'9\"",
  target: "2.10 m",
  seasonBest: "2.06 m",
  fourYearGain: "+0.43 m",

  // HERO
  heroPhoto: "/media/sandil-champion.jpg",

  heroPhotoAlt:
    "Sandil Dilmeth Hetti Arachchige holding the champion's trophy and gold medal at the Western Province Zonal School Meet, 2026",

  heroPhotoCaption:
    "Western Province School Meet · High Jump Champion · 2026",

  // CONTACT
  email: "dilmethsandil@gmail.com",
  phone: "+94 74 040 0241",
  whatsapp: "https://wa.me/94740400241",

  // DOCUMENTS
  transcriptUrl: "/media/transcript.pdf",
  certificateUrl: "/media/Sandil_Athletics_Certificates.pdf",
  newCertificateUrl: "/media/2026-09-10, 0019 Microsoft Lens.pdf",
};



/* =====================================================
   ACADEMICS
===================================================== */

export const academics = [
  {
    subject: "Mathematics",
    board: "Edexcel IAL · Full A-Level",
    grade: "A*",
    status: "complete",
  },

  {
    subject: "Economics",
    board: "Edexcel IAL · AS awarded · full IAL pending",
    grade: "A",
    status: "AS",
  },

  {
    subject: "Further Mathematics",
    board: "Edexcel IAL · sitting 2027",
    grade: "Pending",
    status: "pending",
  },

  {
    subject: "O-Levels",
    board: "Completed · transcript to be linked",
    grade: "Full record",
    status: "record",
  },
];



/* =====================================================
   EXPERIENCE
===================================================== */

export const experience = [
  {
    title: "Economics Intern",
    organisation: "Frontier Research (Pvt.) Ltd, Colombo",
    detail: "Jul–Aug 2026 · Application of Economics",
  },

  {
    title: "Athletic Captain",
    organisation: "School Athletics Squad",
    detail: "Leads training and meet-day organisation.",
  },

  {
    title: "Secretary, Investment Society",
    organisation: "School Investment Society",
    detail:
      "Runs weekly sessions on markets, portfolio theory and economic analysis.",
  },
];



/* =====================================================
   VIDEOS
===================================================== */

export const videos = [

  /* FEATURED NEW PERSONAL BEST */
  {
    title: "2.06 m Personal Best",
    meta:
      "WESTERN PROVINCE SCHOOL GAMES · 2026 · 3rd Place · Personal Best",
    src: "/media/pb.mp4",

    featured: true,

    image:
      "/media/WhatsApp Image 2026-08-17 at 10.55.26.jpeg",

    imageAlt:
      "Sandil Hetti Arachchige holding his championship trophy and medal",
  },


  {
    title: "ZONAL MEET-2026",
    meta: "1st Place · 2.01 m",
    src: "/media/demo-pb.mp4",
  },


  {
    title: "JUNIOR NATIONAL CHAMPIONSHIP-2026",
    meta: "3rd Place · 2.00 m",
    src: "/media/demo-junior-national.mp4",
  },


  {
    title: "INTERNATIONAL COMBO ATHLETICS CHAMPIONSHIP-2026",
    meta: "1st Place · 1.95 m",
    src: "/media/l12.mp4",
  },


  {
    title: "ISAC CHAMPIONSHIPS-2025",
    meta: "1st Place · 1.87 m",
    src: "/media/l6.mp4",
  },


  {
    title: "SENIOR TARBET CHAMPIONSHIPS-2024",
    meta: "3rd Place · 1.88 m",
    src: "/media/l5.mp4",
  },


  {
    title: "JUNIOR NATIONAL CHAMPIONSHIPS-2024",
    meta: "3rd Place · 1.90 m",
    src: "/media/l4.mp4",
  },


  {
    title: "WESTERN PROVINCE CHAMPIONSHIPS-2024",
    meta: "2nd Place · 1.90 m",
    src: "/media/l3.mp4",
  },


  {
    title: "ALL ISLAND SCHOOLS-2022",
    meta: "2nd Place · 1.74 m",
    src: "/media/l2.mp4",
  },


  {
    title: "JUNIOR TARBET CHAMPIONSHIPS-2022",
    meta: "2nd Place · 1.73 m",
    src: "/media/l1.mp4",
  },


  {
    title: "ALL ISLAND SCHOOLS-2021",
    meta: "2nd Place · 1.93 m",
    src: "/media/l7.mp4",
  },


  {
    title: "2019 ISAC MEET",
    meta: "1st Place · 1.35 m",
    src: "/media/demo-reel.mp4",
  },


  {
    title: "PRACTICE SESSION-RECENT",
    meta: "PRACTICE SESSION",
    src: "/media/l9.mp4",
  },


  {
    title: "PRACTICE SESSION-SMALL AGE",
    meta: "PRACTICE SESSION",
    src: "/media/l8.mp4",
  },


  {
    title: "PRACTICE SESSION-SMALL AGE",
    meta: "PRACTICE SESSION",
    src: "/media/l11.mp4",
  },
];



/* =====================================================
   COMPETITION RESULTS
===================================================== */

export const results: Result[] = [

  /* NEW PERSONAL BEST */
  {
    date: " Sep 2026",
    age: "U18",
    meet: "Western Province School Games",
    position: 3,
    height: 2.06,
    pb: true,
  },


  {
    date: "Jul 2026",
    age: "U18",
    meet: "Zonal Meet",
    position: 1,
    height: 2.01,
    pb: false,
  },


  {
    date: "Jun 2026",
    age: "U18",
    meet: "Junior National",
    position: 3,
    height: 2.0,
  },


  {
    date: "Feb 2026",
    age: "U18",
    meet: "ISAC",
    position: 1,
    height: 2.0,
  },


  {
    date: "Jan 2026",
    age: "U18",
    meet: "COMBOS",
    position: 1,
    height: 1.95,
  },


  {
    date: "Feb 2025",
    age: "U18",
    meet: "ISAC",
    position: 1,
    height: 1.86,
  },


  {
    date: "Oct 2024",
    age: "U16",
    meet: "All Island",
    position: 2,
    height: 1.93,
  },


  {
    date: "Sep 2024",
    age: "U16",
    meet: "John Tarbet",
    position: 3,
    height: 1.84,
  },


  {
    date: "Sep 2024",
    age: "U16",
    meet: "WP",
    position: 2,
    height: 1.89,
  },


  {
    date: "Jul 2024",
    age: "U16",
    meet: "Junior National",
    position: 3,
    height: 1.90,
  },


  {
    date: "Jun 2024",
    age: "U16",
    meet: "School Meet",
    position: 1,
    height: 1.85,
  },


  {
    date: "Feb 2024",
    age: "U16",
    meet: "ISAC",
    position: 1,
    height: 1.90,
  },


  {
    date: "Nov 2023",
    age: "U15",
    meet: "John Tarbet",
    position: 2,
    height: 1.87,
  },


  {
    date: "Oct 2023",
    age: "U16",
    meet: "WP",
    position: 1,
    height: 1.88,
  },


  {
    date: "Feb 2023",
    age: "U16",
    meet: "ISAC",
    position: 2,
    height: 1.76,
  },


  {
    date: "Dec 2022",
    age: "U14",
    meet: "John Tarbet",
    position: 2,
    height: 1.73,
  },


  {
    date: "Dec 2022",
    age: "U14",
    meet: "All Island",
    position: 2,
    height: 1.74,
  },


  {
    date: "Oct 2022",
    age: "U14",
    meet: "WP",
    position: 1,
    height: 1.63,
  },


  {
    date: "Aug 2022",
    age: "U14",
    meet: "Zonal Meet",
    position: 1,
    height: 1.63,
  },
];