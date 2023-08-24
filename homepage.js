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
const targetDate = new Date("September 14, 2023 09:00:00").getTime();

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
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Linda-Valentin-1.png",
    name: "Linda Valentin ",
    position: "Chief Commercial Officer - ALFAGIFT",
  },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Hilda-Kitti-1.png",
  //   name: "Hilda Kitti",
  //   position: "VP Marketing Tokopedia",
  // },
  {
    img: "https://loyaltysummit.id/assets/images/Antonius.png",
    name: "Antonius Taufan",
    position: "Founder & Managing Director Tada",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Shalini-Gopalan-1.png",
    name: "Shalini Gopalan",
    position: "Founder & CEO of LoyaltyHub",
  },
  {
    img: "https://loyaltysummit.id/assets/images/additional/Adrian.png",
    name: "Adrian Baskoro",
    position: "Founder Routetomarket.id",
  },
  {
    img: "https://loyaltysummit.id/assets/images/Yongki-1.png",
    name: "Yongky Susilo",
    position: "Retail and Consumer Strategist ",
  },
  {
    img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Mardiansyah-Putra-1.png",
    name: "Mardiansyah Putra",
    position: "General Manager of Commercial Strategic Tada",
  },
  {
    img: "https://loyaltysummit.id/assets/images/additional/Enjel.png",
    name: "Enjelita Jahja ",
    position: "Sr. Industry Lead Google Indonesia",
  },
  {
    img: "https://loyaltysummit.id/assets/images/additional/Aaron.png",
    name: "Aaron Wijaya",
    position: "CEO of Depo Bangunan Online Indonesia",
  },
  {
    img: "https://loyaltysummit.id/assets/images/additional/Ricky.png",
    name: "Ricky Afrianto",
    position: "Global Director PT. Mayora Indah Tbk",
  },
  {
    img: "https://loyaltysummit.id/assets/images/additional/Yopie.png",
    name: "Ir. Yopie Rissa, M.M., MBA",
    position: "Country Head B2B & OEM, BP Castrol",
  },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Derrick-Heng-1.png",
  //   name: "Derrick Heng",
  //   position: "CMO Telkomsel",
  // },

  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Riri-Amalas-Yulia-1.png",
  //   name: "Riri Amalas Yulia",
  //   position: "Director Operation PT. CRM Kalbe",
  // },
  // {
  //   img: "https://loyaltysummit.id/assets/images/Niraj-1.png",
  //   name: "Niraj Jain",
  //   position: "CFO Matahari Dept Store",
  // },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Riri-Amalas-Yulia-1.png",
  //   name: "Riri Amalas Yulia",
  //   position: "Director Operation PT. CRM Kalbe",
  // },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/VP-Sharma-1.png",
  //   name: "VP Sharma",
  //   position: "CEO MAP",
  // },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Melissa-Hendrawati-1.png",
  //   name: "Melissa Hendrawati",
  //   position: "CFO Superbank Indonesia",
  // },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Irinne-Dwiyuliana-Pratiwi-1.png",
  //   name: "Irinne Dwiyuliana Pratiwi",
  //   position: "GM Marketing Erha Clinic Indonesia (Arya Noble)",
  // },
  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Franz-Hermawan-1.png",
  //   name: "Franz Hermawan",
  //   position: "GM Business Development PT. EXXON Mobil Indonesia",
  // },

  // {
  //   img: "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/VP-Sharma-1.png",
  //   name: "VP Sharma",
  //   position: "CEO MAP",
  // },
];
const speakersDiv = document.getElementById("speakerGrid");

speakers.forEach((speaker) => {
  const speakerDiv = document.createElement("div");
  speakerDiv.className = "speaker";
  speakerDiv.innerHTML = `
          <img src="${speaker.img}" alt="${speaker.name}">
          <h3>${speaker.name}</h3>
          <p>${speaker.position}</p>
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
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan & Ketua Umum Association",
        position: "Founder & Managing Director Tada",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "09.50 - 10.10",
    value: `Keynote Speech: “The 2nd Indonesia Consumer Boom: Next Decade New Consumerism (Bright Outlook)”`,
    category: "agenda",
    speakers: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Yongki-Susilo.png",
        name: "Yongky Susilo",
        position: "Retail and Consumer Strategist ",
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
    time: "10.15 - 10.35",
    value: `Keynote Speech: Digital Media Landscape by Google`,
    category: "agenda",
    speakers: [
      {
        photo: "https://loyaltysummit.id/assets/images/Enjel.png",
        name: "Enjelita Jahja",
        position: "Senior Industry Lead - Google",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "10.40 - 10.55",
    value: `Insight Story - FMCG Corner: “The Future of FMCG: How to create brand loyalty?”`,
    category: "agenda",
    speakers: [
      {
        photo: "https://loyaltysummit.id/assets/images/Ricky.png",
        name: "Ricky Afrianto",
        position: "Director and Global Marketing PT. Mayora Indah, Tbk",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "11.00 - 11.15",
    value: `Insight Story by MAPClub`,
    category: "agenda",
    speakers: [
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Ravi Kumar",
        position: "COO PT.Mitra Adi Perkasa, Tbk - MAP",
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
    time: "11.20 - 11.55",
    value: `Panel 1: “The Retention Revolution: Innovations in Keeping Your Customers Coming Back”`,
    category: "agenda",
    speakers: [
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Lilis Mulyawati",
        position: "President Director Watsons Indonesia",
      },
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Ravi Kumar",
        position: "Director & COO PT. Mitra Adi Perkasa MAP - MAP Club",
      },
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Linda-Valentin.png",
        name: "Linda Valentine",
        position: "CCO Alfagift",
      },
    ],
    moderators: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Shalini-Gopalan.png",
        name: "Shalini Gopalan",
        position: "Founder & CEO of LoyaltyHub",
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
    time: "13.05 - 13.30",
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
        photo: "hhttps://loyaltysummit.id/assets/images/Adrian.png",
        name: "Adrian Baskoro",
        position: "Trade Marketing Expert & Founder Routetomarket.id",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "13.35 - 13.55",
    value: `Keynote Speech: "The importance of retaining B2B partner to boost sales"`,
    category: "agenda",
    speakers: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Niraj-Jain.png",
      //   name: "Niraj Jain",
      //   position: "CFO Matahari Dept Store",
      // },
      // {
      //   photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
      //   name: "Patra Azwar",
      //   position: "CFO PT. Goodyear Indonesia",
      // },
      {
        photo: "https://loyaltysummit.id/assets/images/Yopie.png",
        name: "Yopie Rissa",
        position: "Country Head B2B & OEM PT. Castrol Indonesia",
      },
    ],
    moderators: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
      //   name: "Antonius Taufan",
      //   position: "Founder & Managing Director Tada",
      // },
    ],
  },
  {
    tags: [],
    time: "14.00 - 14.15",
    value: `Panel 2: "Partner collaboration: strengthening sales channels for mutual growth through loyalty and rewards program”`,
    category: "agenda",
    speakers: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Riri-Amalas-Yulia.png",
      //   name: "Riri Amalas Yulia",
      //   position: "Director Operation PT. CRM Kalbe",
      // },
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Wimam Limandibrata",
        position: "RTM Strategy and BizDev Director at Danone",
      },
      {
        photo: "https://loyaltysummit.id/assets/images/Aaron.png",
        name: "Aaron Wijaya",
        position: "CEO of Depo Bangunan Online Indonesia",
      },
    ],
    moderators: [
      {
        photo: "https://loyaltysummit.id/assets/images/Adrian.png",
        name: "Adrian Baskoro",
        position: "Trade Marketing Expert & Founder Routetomarket.id",
      },
    ],
  },
  {
    tags: [],
    time: "14.20 - 14.35",
    value: `GRAB`,
    category: "agenda",
    speakers: [
      // {
      //   photo:
      //     "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Franz-Hermawan.png",
      //   name: "Franz Hermawana",
      //   position: "CM Business Development PT. EXXON Mobil Indonesia",
      // },
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Pramita Hadi",
        position: "Head of GTM, Product, and Operation at Grab for Business",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "14.40 - 14.55",
    value: "Coffee Break",
    category: "networking",
    speakers: [],
    moderators: [],
  },
  {
    tags: [],
    time: "15.00 - 15.40",
    value: `Panel 3: “Customer Centricity in the Digital Age: Navigating the Landscape of Omnichannel Customer Retention”`,
    category: "agenda",
    speakers: [
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Mikiko Steven",
        position: "Managing Director of Xendit",
      },
      {
        photo: "https://loyaltysummit.id/assets/icons/profile-user.svg",
        name: "Tammy Tanumiharja",
        position: "Business Development Director of Bakmi GM",
      },
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Hilda-Kitti.png",
        name: "Hilda Kitti",
        position: "VP Marketing Tokopedia",
      },
    ],
    moderators: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Mardiansyah-Putra.png",
        name: "Mardiansyah Putra",
        position: "General Manager of Commercial Strategic Tada",
      },
    ],
  },

  {
    tags: [],
    time: "15.45 - 16.15",
    value: `Closing Sessions - Fireside Chat:
      "Evolution of Loyalty Program Past and Present -- What are the leading innovations that will transform loyalty over the next 10 years"`,
    category: "agenda",
    speakers: [
      {
        photo:
          "https://loyaltyrewards-conference.com/wp-content/uploads/2023/07/Photo-Speaker-2.png",
        name: "Antonius Taufan",
        position: "Founder & Managing Director Tada",
      },
    ],
    moderators: [],
  },
  {
    tags: [],
    time: "16.20 - 16.25",
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
