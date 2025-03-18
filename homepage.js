let images1 = [
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Yongki-Susilo-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Mardiansyah-Putra-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Derrick-Heng-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Niraj-Jain-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Riri-Amalas-Yulia-1.png",
];
let images2 = [
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Melissa-Hendrawati-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Franz-Hermawan-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Aaron-Wijaya-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Irinne-Dwiyuliana-Pratiwi-1.png",
  "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/VP-Sharma-1.png",
];

function changeImages() {
  for (let i = 1; i <= 5; i++) {
    let block = document.getElementById("block" + i);
    let bg = block.querySelector(".bg");

    if (
      !bg.style.backgroundImage ||
      bg.style.backgroundImage.includes(images1[i - 1])
    ) {
      bg.style.backgroundImage = "url(" + images2[i - 1] + ")";
    } else {
      bg.style.backgroundImage = "url(" + images1[i - 1] + ")";
    }
  }
}

setInterval(changeImages, 3500);

// countdown
const targetDate = new Date("May 22, 2025 09:00:00").getTime();

// Update countdown setiap detik
const countdownTimer = setInterval(function () {
  // Tanggal saat ini
  const now = new Date().getTime();

  // Hitung selisih antara sekarang dengan target
  const timeRemaining = targetDate - now;

  // Hitung hari, jam, menit, dan detik
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Tampilkan countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Jika waktu sudah habis
  if (timeRemaining <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML =
      "Conference telah berakhir";
  }
}, 1000);

//carousel
//carousel
function endlessScroll(carouselID, speed) {
  let carousel = document.getElementById(carouselID);

  let scrollDistance = 0;

  function scroll() {
    carousel.scrollLeft = scrollDistance;

    if (speed > 0) {
      if (scrollDistance < carousel.scrollWidth - carousel.clientWidth) {
        scrollDistance += speed;
      } else {
        scrollDistance = 0;
      }
    } else {
      if (scrollDistance > 0) {
        scrollDistance += speed; // speed is a negative value
      } else {
        scrollDistance = carousel.scrollWidth - carousel.clientWidth;
      }
    }

    requestAnimationFrame(scroll);
  }

  // Start scrolling
  scroll();
}

endlessScroll("carousel1", -0.5); // carousel1 bergerak ke arah kanan
endlessScroll("carousel2", -0.5);

// speakers
const speakers = [
  {
    img: "/assets/2025/Ricky.png",
    name: "Ricky Afrianto",
    position: "Global Director PT. Mayora Indah Tbk",
  },
  {
    img: "/assets/2025/Enjelita.png",
    name: "Enjelita Jahja",
    position: "Sr. Industry Lead Google Indonesia",
  },
  {
    img: "/assets/2025/Ravi.png",
    name: "Ravi Kumar",
    position: "Director & COO PT. Mitra Adi Perkasa MAP - MAP Club",
  },
  {
    img: "/assets/2025/Linda.png",
    name: "Linda Valentin",
    position: "Chief Commercial Officer - ALFAGIFT",
  },
  {
    img: "/assets/2025/Yopie.png",
    name: "Ir. Yopie Rissa, M.M., MBA",
    position: "Country Head B2B & OEM, BP Castrol",
  },
  {
    img: "/assets/2025/Adrian.png",
    name: "Adrian Baskoro",
    position: "Founder Routetomarket.id",
  },
  {
    img: "/assets/2025/Shalini.png",
    name: "Shalini Gopalan",
    position: "Founder & CEO of LoyaltyHub",
  },
  {
    img: "/assets/2025/Yongki.png",
    name: "Yongky Susilo",
    position: "Retail and Consumer Strategist",
  },
  {
    img: "/assets/2025/Antonius.png",
    name: "Antonius Taufan",
    position: "Founder & Managing Director Tada",
  },
  {
    img: "/assets/2025/Aaron.png",
    name: "Aaron Wijaya",
    position: "CEO of Depo Bangunan Online Indonesia",
  },
  {
    img: "/assets/2025/Mardiansyah.png",
    name: "Mardiansyah Putra",
    position: "General Manager of Commercial Strategic Tada",
  },
  {
    img: "/assets/2025/Ruchir.png",
    name: "Ruchir Prasoon",
    position: "Vice President of Product Tokopedia",
  },
  {
    img: "/assets/2025/Pramita.png",
    name: "Pramita Hadi",
    position: "Head of GTM, Product, and Operation at Grab for Business",
  },
  {
    img: "/assets/2025/Muliadi.png",
    name: "Muliadi Jeo",
    position: "CTO of Enterprise Solutions Sirclo",
  },
  {
    img: "/assets/2025/Andy.png",
    name: "Andy Gozali",
    position: "Country Head - RevComm Indonesia",
  },
  {
    img: "/assets/2025/Meshvara.png",
    name: "Meshvara Kanjaya",
    position: "Former CEO Ranch Market",
  },
  {
    img: "/assets/2025/Laode.png",
    name: "Laode Hartanto",
    position: "Chief Growth Officer Dentsu Indonesia",
  },
  {
    img: "/assets/2025/Mark.png",
    name: "Mark Gabriel Priyono",
    position: "CEO Prieds",
  },
  {
    img: "/assets/2025/Bonifasius.png",
    name: "Bonifasius Victoria",
    position: "CEO Sanco Indonesia",
  },
  {
    img: "/assets/2025/Andiny.png",
    name: "Andiny Kismaryanti",
    position: "Shopper Marketing PT. Paragon Technology & Innovations",
  },
];
const speakersDiv = document.getElementById("speakerGrid");

speakers.forEach((speaker) => {
  const speakerDiv = document.createElement("div");
  speakerDiv.className = "speaker";
  speakerDiv.innerHTML = `
          <img src="${speaker.img}" alt="${speaker.name}">
          <div class="speaker-info">
          <h3>${speaker.name}</h3>
          <p>${speaker.position}</p>
          </div>
      `;
  speakersDiv.appendChild(speakerDiv);
});

//agenda
// agenda data array
const agendaData = [
  {
    tags: [],
    time: "08.30 - 09.30",
    value: "Registration - networking session - Coffee Break",
    category: "agenda",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "09.30 - 09.35",
    value: "Opening by MC",
    category: "agenda",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "09.35 - 09.45",
    value: "Opening Remarks",
    category: "agenda",
    speakers: [
      {
        photo: "/assets/2025/Antonius.png",
        name: "Antonius Taufan",
        position: "Founder & Managing Director Tada",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "09.45 - 10.05",
    value: `Keynote Speech: Navigating the Digital Media Landscape: The Paradigm Shift Era"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Enjel.png",
        name: "Enjelita Jahja",
        position: "Senior Industry Lead - Google",
      },

      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Shalini-Gopalan.png",
      //   name: "Shalini Gopalan",
      //   position: "Founder & CEO of LoyaltyHub",
      // },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "10.05 - 10.25",
    value: `Keynote Speech: "The 2nd Indonesia Consumer Boom: Next Decade New Consumerism (Bright Outlook)"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/2025/Yongki.png",
        name: "Yongky Susilo",
        position: "Retail and Consumer Strategist ",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "10.25 - 10.45",
    value: `Insight Story - FMCG Corner: "The Future of FMCG: How to create brand loyalty?"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Ricky.png",
        name: "Ricky Afrianto",
        position: "Director and Global Marketing PT. Mayora Indah, Tbk",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "10.45 - 11.05",
    value: `Keynote Speech: Loyalty Programs Don't Equate to Loyalty`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/2025/Shalini.png",
        name: "Shalini Gopalan",
        position: "Founder of LoyaltyHub",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "11.05 - 11.25",
    value: `Insight Story by MAPClub`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Ravi.png",
        name: "Ravi Kumar",
        position: "Director & COO PT. Mitra Adi Perkasa MAP - MAP Club",
      },
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/VP-Sharma.png",
      //   name: "VP Sharma",
      //   position: "CEO MAP",
      // },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "11.25 - 12.00",
    value: `Panel 1: "The Retention Revolution: Innovations in Keeping Your Customers Coming Back"`,
    category: "agenda",
    speakers: [
      // {
      //   photo: "/assets/icons/profile-user.svg",
      //   name: "*tbc",
      //   position: "*tbc",
      // },
      // {
      //   photo: "/assets/images/Ravi.png",
      //   name: "Ravi Kumar",
      //   position: "Director & COO PT. Mitra Adi Perkasa MAP - MAP Club",
      // },

      {
        photo: "/assets/2025/Linda.png",
        name: "Linda Valentine",
        position: "CCO Alfagift",
      },
      {
        photo: "/assets/images/Meshvara.png",
        name: "Meshvara Kanjaya",
        position: "Former CEO of Ranch Market",
      },
      {
        photo: "/assets/images/Andiny.png",
        name: "Andiny Kismaryanti",
        position: "Shopper Marketing PT. Paragon Technology & Innovations",
      },
    ],
    moderators: [
      {
        photo: "/assets/2025/Yongki.png",
        name: "Yongky Susilo",
        position: "Retail and Consumer Strategist ",
      },
    ],
  },
  {
    tags: [],
    time: "12.00 - 12.05",
    value: "Break Lunch by MC",
    category: "agenda",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "12.05 - 13.00",
    value: "Lunch Attendees in Voyer",
    category: "break",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "12.05 - 13.00",
    value: "Executive VIPs Lunch in Room 3",
    category: "break",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "13.05 - 13.25",
    value: `Keynote Speech: "How to Monitoring the Channel Activation and Growing the Right Channel"`,
    category: "agenda",
    speakers: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Hilda-Kitti.png",
      //   name: "Hilda Kitti",
      //   position: "VP Marketing Tokopedia",
      // },
      {
        photo: "/assets/images/Adrian.png",
        name: "Adrian Baskoro",
        position: "Trade Marketing Expert & Founder Routetomarket.id",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "13.25 - 13.45",
    value: `Keynote Speech: "The importance of retaining B2B partner to boost sales"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Yopie.png",
        name: "Yopie Rissa",
        position: "Country Head B2B & OEM PT. Castrol Indonesia",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "13.45 - 14.05",
    value: `Insight Story: "Empower Building Material Retailers & Distributors through the Use of Technology"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Aaron.png",
        name: "Aaron Wijaya",
        position: "CEO of Depo Bangunan Online Indonesia",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "14.05 - 14.25",
    value: `Insight Story by Grab "Elevate the gifting experience with GrabGifts"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Pramita.png",
        name: "Pramita Hadi",
        position: "Head of GTM, Product, and Operation at Grab for Business",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "14.25 - 15.00",
    value: `Product Showcase: "Track, Trace, and Retain"`,
    category: "agenda",
    speakers: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Franz-Hermawan.png",
      //   name: "Franz Hermawana",
      //   position: "CM Business Development PT. EXXON Mobil Indonesia",
      // },
      {
        photo: "/assets/images/Mardiansyah.png",
        name: "Mardiansyah Putra",
        position: "General Manager of Commercial Strategic Tada",
      },
      {
        photo: "/assets/images/Mark.png",
        name: "Mark Gabriel Priyono",
        position: "CEO Prieds",
      },
      {
        photo: "/assets/images/Bonifasius.png",
        name: "Bonifasius Victoria",
        position: "CEO Sanco Indonesia",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "15.00 - 15.15",
    value: "Coffee Break",
    category: "networking",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "15.15 - 15.35",
    value: `Keynote Speech: Building Customer Loyalty by Knowing Your Customer`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/Muliadi.png",
        name: "Muliadi Jeo",
        position: "CTO of Enterprise Solutions - SIRCLO",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "15.35 - 16.05",
    value: `Panel Discussion: "Customer Centricity in the Digital Age: Navigating the Landscape of Customer Retention"`,
    category: "agenda",
    speakers: [
      {
        photo: "/assets/images/additional/Ruchir.png",
        name: "Ruchir Prasoon",
        position: "Vice President of Product Tokopedia",
      },
      {
        photo: "/assets/images/Andy.png",
        name: "Andy Gozali",
        position: "Country Head - RevComm Indonesia",
      },
      {
        photo: "/assets/images/Laode.png",
        name: "Laode Hartanto",
        position: "Chief Growth Officer - Dentsu",
      },
    ],
    moderators: [
      {
        photo: "/assets/images/Muliadi.png",
        name: "Muliadi Jeo",
        position: "CTO of Enterprise Solutions - SIRCLO",
      },
    ],
  },
  {
    tags: [],
    time: "16.05 - 16.25",
    value: `Closing Sessions - Fireside Chat: Tada Case Study "B2B Loyalty vs B2C Loyalty, which one is more important?"`,
    speakers: [
      {
        photo: "/assets/icons/profile-user.svg",
        name: "Juan Aristya & Devicca",
        position: "",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "16.25 - 16.40",
    value: "Doorprize",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "16.40 - 16.45",
    value: "Closing by MC",
    speakers: [],
    moderators: [],
  },
];

// Generate the HTML markup using the agenda data
function generateAgendaMarkup() {
  const groupAgendaElement = document.querySelector(".group-agenda");
  for (const agendaItem of agendaData) {
    const boxAgendaElement = document.createElement("div");
    boxAgendaElement.classList.add("box-agenda", agendaItem.category);

    const timeElement = document.createElement("div");
    timeElement.classList.add("agenda-time");
    const timeText = document.createElement("p");
    timeText.classList.add(
      "paragraph-regular-16",
      getTextColorClass(agendaItem.category)
    );
    timeText.textContent = agendaItem.time;
    timeElement.appendChild(timeText);

    const valueElement = document.createElement("div");
    valueElement.classList.add(
      "agenda-value",
      getTextColorClass(agendaItem.category)
    );

    // Add tags to the agenda item
    if (agendaItem.tags && agendaItem.tags.length > 0) {
      const tagsElement = document.createElement("div");
      tagsElement.classList.add("agenda-tags");
      const tagsText = document.createElement("p");
      tagsText.classList.add("paragraph-bold-14");
      tagsText.textContent = agendaItem.tags.join(", ");
      tagsElement.appendChild(tagsText);
      valueElement.appendChild(tagsElement);
    }

    const valueTitleElement = document.createElement("div");
    valueTitleElement.classList.add("agenda-title");
    const valueTitleText = document.createElement("p");
    valueTitleText.classList.add("paragraph-bold-18");
    valueTitleText.textContent = agendaItem.value;
    valueTitleElement.appendChild(valueTitleText);
    valueElement.appendChild(valueTitleElement);

    const speakersElement = document.createElement("div");
    speakersElement.classList.add("agenda-speakers");
    if (agendaItem.speakers.length > 0) {
      const speakersText = document.createElement("p");
      speakersText.classList.add("paragraph-bold-14");
      speakersText.textContent = "Speakers";
      speakersElement.appendChild(speakersText);

      const speakerListElement = document.createElement("div");
      speakerListElement.classList.add("agenda-speaker-list");

      for (const speaker of agendaItem.speakers) {
        const speakerItemElement = document.createElement("div");
        speakerItemElement.classList.add("agenda-speaker-item");

        const speakerPhotoElement = document.createElement("img");
        speakerPhotoElement.src = speaker.photo;
        speakerPhotoElement.alt = "Speaker";
        speakerItemElement.appendChild(speakerPhotoElement);

        const speakerDetailElement = document.createElement("div");
        speakerDetailElement.classList.add("agenda-speaker-detail");

        const speakerNameElement = document.createElement("p");
        speakerNameElement.classList.add("paragraph-bold-16");
        speakerNameElement.textContent = speaker.name;
        speakerDetailElement.appendChild(speakerNameElement);

        const speakerPositionElement = document.createElement("p");
        speakerPositionElement.classList.add("paragraph-regular-14");
        speakerPositionElement.textContent = speaker.position;
        speakerDetailElement.appendChild(speakerPositionElement);

        speakerItemElement.appendChild(speakerDetailElement);
        speakerListElement.appendChild(speakerItemElement);
      }

      speakersElement.appendChild(speakerListElement);
      valueElement.appendChild(speakersElement);
    }

    const moderatorsElement = document.createElement("div");
    moderatorsElement.classList.add("agenda-moderators");
    if (agendaItem.moderators.length > 0) {
      const moderatorsText = document.createElement("p");
      moderatorsText.classList.add("paragraph-bold-14");
      moderatorsText.textContent = "Moderators";
      moderatorsElement.appendChild(moderatorsText);

      const moderatorListElement = document.createElement("div");
      moderatorListElement.classList.add("agenda-moderator-list");

      for (const moderator of agendaItem.moderators) {
        const moderatorItemElement = document.createElement("div");
        moderatorItemElement.classList.add("agenda-moderator-item");

        const moderatorPhotoElement = document.createElement("img");
        moderatorPhotoElement.src = moderator.photo;
        moderatorPhotoElement.alt = "Moderator";
        moderatorItemElement.appendChild(moderatorPhotoElement);

        const moderatorDetailElement = document.createElement("div");
        moderatorDetailElement.classList.add("agenda-speaker-detail");

        const moderatorNameElement = document.createElement("p");
        moderatorNameElement.classList.add("paragraph-bold-16");
        moderatorNameElement.textContent = moderator.name;
        moderatorDetailElement.appendChild(moderatorNameElement);

        const moderatorPositionElement = document.createElement("p");
        moderatorPositionElement.classList.add("paragraph-regular-14");
        moderatorPositionElement.textContent = moderator.position;
        moderatorDetailElement.appendChild(moderatorPositionElement);

        moderatorItemElement.appendChild(moderatorDetailElement);
        moderatorListElement.appendChild(moderatorItemElement);
      }

      moderatorsElement.appendChild(moderatorListElement);
      valueElement.appendChild(moderatorsElement);
    }

    boxAgendaElement.appendChild(timeElement);
    boxAgendaElement.appendChild(valueElement);
    groupAgendaElement.appendChild(boxAgendaElement);
  }
}

// Function to get the text color class based on the category
function getTextColorClass(category) {
  if (category === "networking") {
    return "text-invert";
  } else {
    return "text-ink";
  }
}

// Call the function to generate the agenda markup and apply styling on page load
window.onload = function () {
  generateAgendaMarkup();
};

if (window.location.pathname.endsWith("/")) {
  var newUrl = window.location.pathname.slice(0, -1);
  window.history.replaceState({}, document.title, newUrl);
}

// sponsorship
// sponsorship
const partners = {
  platinum: ["DBO.svg", "Grab.svg"],
  gold: ["Sirclo.svg", "MiiTel.svg", "Prieds.svg"],
  silver: [
    "ValueFirst.svg",
    "Debellin.svg",
    "Leka.svg",
    "Alva.svg",
    "Palbada.svg",
  ],
  associate: ["Gapmmi.svg", "Hippindo.svg", "AP3MI.svg", "Perkosmi.svg"],
};

function createPartnerElements(category) {
  const partnerContainer = document.getElementById(category);
  const logos = partners[category];

  logos.forEach((logo) => {
    const partnerItem = document.createElement("div");
    partnerItem.classList.add("partner-item");
    const img = document.createElement("img");
    img.src = `/assets/2025/${logo}`;
    img.alt = `${category} Partner`;
    partnerItem.appendChild(img);
    partnerContainer.appendChild(partnerItem);
  });
}

createPartnerElements("platinum");
createPartnerElements("gold");
createPartnerElements("silver");
createPartnerElements("associate");
