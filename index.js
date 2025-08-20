// --------------------------------------------
// createElement() Function Start

const createElement = (tagName, textContent) => {
  const element = document.createElement(tagName);

  if (textContent) {
    element.appendChild(document.createTextNode(textContent));
  }

  return element;
};

// createElement() Function End
// --------------------------------------------

// --------------------------------------------
// Section-2 Start

const section2 = (title, [...item]) => {
  const section = document.getElementById(`section2`);

  const h2 = createElement(`h2`, title);
  const ul = createElement(`ul`);

  // CLASSNAME
  h2.className = `main-title`;
  ul.className = `list`;

  // Counter for <img> tag
  let count = 1;

  item.forEach(([href, src]) => {
    // ELEMENTS
    const li = createElement(`li`);
    const a = createElement(`a`);
    const img = createElement(`img`);
    const span = createElement(`span`, count);

    // ATTRIBUTES
    a.href = href || `#`;
    img.src = src;

    // CLASSNAME
    li.className = `li`;
    a.className = `anchor`;
    img.className = `img`;
    span.className = `counter`;

    count += 1;

    // APPEND ELEMENTS
    ul.appendChild(li);
    li.appendChild(a);
    a.append(img, span);
  });

  section.append(h2, ul);
};
section2(`Trending Now`, [
  [`href`, `src/1st.jpg`],
  [`href`, `src/2nd.jpg`],
  [`href`, `src/3rd.jpg`],
  [`href`, `src/4th.jpg`],
  [`href`, `src/5th.jpg`],
  [`href`, `src/6th.jpg`],
  [`href`, `src/7th.jpg`],
  [`href`, `src/8th.jpg`],
  [`href`, `src/9th.jpg`],
  [`href`, `src/9th.jpg`],
]);

// Section-2 End
// --------------------------------------------

// --------------------------------------------
// Section-3 Start

const section3 = (main, [...item]) => {
  const section = document.getElementById(`section3`);

  // ELEMENTS
  const h2 = createElement(`h2`, main);
  const div = createElement(`div`);

  // CLASSNAME
  h2.className = `main-title`;
  div.className = `container`;

  // APPEND ELEMENTS
  section.append(h2, div);

  item.forEach(([title, text, src, alt]) => {
    // ELEMENTS
    const card = createElement(`div`);
    const h3 = createElement(`h3`, title);
    const p = createElement(`p`, text);
    const img = createElement(`img`);

    // ATTRIBUTES
    img.src = src;
    img.alt = alt;

    // CLASSNAME
    card.className = `card`;
    h3.className = `card-title`;
    p.className = `card-text`;
    img.className = `card-img`;

    // APPEND ELEMENTS
    div.appendChild(card);
    card.append(h3, p, img);
  });

  return section3;
};

section3(`More reasons to join`, [
  [
    `Enjoy on your TV`,
    `Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.`,
    ``,
    ``,
  ],
  [
    `Download your shows to watch offline`,
    `Save your favourites easily and always have something to watch.`,
    ``,
    ``,
  ],
  [
    `Watch everywhere`,
    `Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.`,
    ``,
    ``,
  ],
  [
    `Create profiles for kids`,
    `Send kids on adventures with their favourite characters in a space made just for them — free with your membership.`,
    ``,
    ``,
  ],
]);

// Section-3 End
// --------------------------------------------

// --------------------------------------------
// Section-4 Start

const section4 = (title, [...item]) => {
  const section = document.getElementById(`section4`);

  // ELEMENTS
  const h2 = createElement(`h2`, title);
  const ul = createElement(`ul`);

  // CLASSNAME
  h2.className = `main-title`;
  ul.className = `faq-list`;

  // APPEND ELEMENTS
  section.append(h2, ul);

  item.forEach(([title, summary]) => {
    // ELEMENTS
    const li = createElement(`li`);
    const h3 = createElement(`h3`, title);
    const p = createElement(`p`, summary);
    const close = createElement(`span`, `❌`);

    // CLASSNAME
    li.className = `faq-list-item`;
    h3.className = `faq-title`;
    p.className = `faq-summary`;
    close.className = `close-icon`;

    // Click Event for <li> Tag
    li.addEventListener(`click`, () => {
      h3.classList.toggle(`active`);
    });

    // APPEND ELEMENTS
    ul.append(li);
    li.append(h3, close, p);
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

// Section-4 End
// --------------------------------------------

// --------------------------------------------
// Footer Start

const footer = ([...lists]) => {
  const list = document.getElementById(`list`);

  lists.forEach((group) => {
    // Element
    const ul = createElement(`ul`);

    // CLASSNAME
    ul.className = `list`;

    group.forEach(([href, text]) => {
      // ELEMENTS
      const li = createElement(`li`);
      const a = createElement(`a`, text);

      // ATTRIBUTES
      a.href = href || `#`;

      // CLASSNAME
      li.className = `list-item`;
      a.className = `anchor`;

      // APPEND ELEMENTS
      ul.append(li);
      li.append(a);
    });

    // Append Element
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
