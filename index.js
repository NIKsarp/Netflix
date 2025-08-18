// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, [...attribute], textContent) => {
  const element = document.createElement(tagName);

  // Set each attribute as [name, value]
  attribute.forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------

// --------------------------------------------
// Section-3 Start

const section = (main, [...item]) => {
  const heading = createElement(`h2`, [[`class`, `main-title`]], main);
  const section3 = document.getElementById(`section3`);
  const div = createElement(`div`, [[`class`, `container`]]);

  section3.append(heading, div);
  item.forEach(([title, text, src, alt]) => {
    const card = createElement(`div`, [[`class`, `card`]]);
    const cardTitle = createElement(`h3`, [[`class`, `card-title`]], title);
    const cardText = createElement(`p`, [[`class`, `card-text`]], text);
    const cardImg = createElement(`img`, [
      [`src`, src],
      [`alt`, alt],
      [`class`, `card-img`],
    ]);

    div.appendChild(card);
    card.append(cardTitle, cardText, cardImg);
  });

  return section3;
};

section(`More reasons to join`, [
  [
    `Enjoy on your TV`,
    `Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.`,
    `first src`,
    `alt attribute`,
  ],
  [
    `Download your shows to watch offline`,
    `Save your favourites easily and always have something to watch.`,
    `second src`,
    `alt attribute`,
  ],
  [
    `Watch everywhere`,
    `Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.`,
    `third src`,
    `alt attribute`,
  ],
  [
    `Create profiles for kids`,
    `Send kids on adventures with their favourite characters in a space made just for them — free with your membership.`,
    `four src`,
    `alt attribute`,
  ],
]);

// Section-3 End
// --------------------------------------------

// --------------------------------------------
// Section-4 Start

const section4 = (title, [...item]) => {
  const mainTitle = createElement(`h2`, [[`class`, `main-title`]], title);
  const section = document.getElementById(`section4`);
  const ul = createElement(`ul`, [[`class`, `faq-list`]]);
  section.append(mainTitle, ul);

  item.forEach(([faqTitle, summary]) => {
    const li = createElement(`li`, [[`class`, `faq-list-item`]]);
    const details = createElement(`details`, [[`class`, `details`]]);
    const summaryTag = createElement(`summary`, [[`class`, `summary`]]);
    const faq = createElement(`h3`, [[`class`, `faq-title`]], faqTitle);
    const p = createElement(`p`, [[`class`, `faq-summary`]], summary);

    ul.append(li);
    li.append(details);
    details.append(summaryTag, p);
    summaryTag.append(faq);
  });

  return section;
};

section4(`Frequently Asked Questions`, [
  [
    `What is Netflix?`,
    `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  ],
  [
    `How much does Netflix cost?`,
    `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
  ],
  [
    `Where can I watch?`,
    `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  ],
  [
    `How do I cancel?`,
    `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  ],
  [
    `What can I watch on Netflix?`,
    `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  ],
  [
    `Is Netflix good for kids?`,
    `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  ],
]);
// for faqquestion
const faqItems = document.querySelector(".faq-list");
// console.log(faqItems.forEach((item) => console.log(item)));

// Array.from(faqItems).forEach((item) => {
//   const question = item.querySelector(`.faq-list-item`);

//   question.addEventListener(`click`, (e) => {
//     faqItems.forEach((i) => i.classList.remove(`active`));
//     faqItems.classList.add(`active`);
//   });
// });

//
const items = document.getElementsByClassName(`.faq-list`);

Array.from(items).forEach((item, index) => {
  const ul = item.querySelector("faq-list-item"); // Find <ul> inside each .details
  console.log(`Item ${index + 1}:`, ul);
});

// Section-4 End
// --------------------------------------------

// --------------------------------------------
// Footer Start

const footer = ([...lists]) => {
  const list = document.getElementById(`list`);

  lists.forEach((group) => {
    const ul = createElement(`ul`, [[`class`, `list`]]);
    group.forEach(([href, text]) => {
      const li = createElement(`li`, [[`class`, `list-item`]]);
      const a = createElement(
        `a`,
        [
          [`href`, href || `#`],
          [`class`, `anchor`],
        ],
        text
      );
      ul.append(li);
      li.append(a);
    });
    list.append(ul);
  });

  return list;
};
footer([
  [
    [``, `FAQ`],
    [``, `Help Centre`],
    [``, `Account`],
    [``, `Media Centre`],
  ],
  [
    [``, `Investor Relations`],
    [``, `Jobs`],
    [``, `Ways to Watch`],
    [``, `Terms of Use`],
  ],
  [
    [``, `Privacy`],
    [``, `Cookie Preferences`],
    [``, `Corporate Information`],
    [``, `Contact Us`],
  ],
  [
    [``, `Speed Test`],
    [``, `Legal Notices`],
    [``, `Only on Netflix`],
  ],
]);

// Footer End
// --------------------------------------------
