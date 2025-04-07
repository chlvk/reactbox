import { useState } from "react";
import "./index.css";

//Rus
// 1 - Создайте состояние isOpen для управления открытием и закрытием приложения. Интерфейс скрывается при нажатии на крестик и отображается при нажатии на кнопку "Начать".
// 2 - Реализуйте функционал отображения карточек в зависимости от активного таба. Переключать табы можно как нажатием на кнопки "Prev" и "Next", так и нажатием на сам таб.

// Card data with details for each card
const cardData = [
  {
    title: "Mocha",
    description: "Developing a fintech product for the international market",
    date: "April 24, 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#fintech", "#international", "#market"],
    archived: false,
  },
  {
    title: "Money Forward",
    description: "Frontend and backend for a salary payout service on demand",
    date: "January 16, 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#finance", "#service", "#payouts"],
    archived: false,
  },
  {
    title: "ActivePlatform",
    description:
      "Adobe integration and platform development for comprehensive subscriptions",
    date: "November 10, 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#integration", "#platform", "#subscription"],
    archived: false,
  },
  {
    title: "START",
    description: "Developed an A/B testing platform for a streaming service",
    date: "September 22, 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B testing", "#streaming", "#platform"],
    archived: false,
  },
  {
    title: "Mindbox",
    description: "Supporting the redesign of an automated marketing platform",
    date: "September 21, 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#marketing", "#redesign", "#automation"],
    archived: false,
  },
];

// Grouping cards into three tabs
const tabData = [
  [cardData[0], cardData[1]], // Tab 1
  [cardData[2], cardData[3]], // Tab 2
  [cardData[4]], // Tab 3
];

export default function App() {
  const [openedTab, setOpenedTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  function handleTabClick(tabNumber) {
    setOpenedTab(tabNumber);
  }
  function handleButtonClick(step) {
    if (openedTab + step < 0) return;
    if (openedTab + step > tabData.length - 1) return;
    setOpenedTab((prev) => prev + step);
  }
  function toggleApp() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      {!isOpen && <button onClick={toggleApp}>Start</button>}
      {isOpen && (
        <>
          <div className="app">
            <span className="close" onClick={toggleApp}>
              &times;
            </span>
            <h1>State Tabs Card Display</h1>

            <div className="tab-buttons">
              <button
                className={`tab-button ${openedTab === 0 && "active"}`}
                onClick={() => handleTabClick(0)}
              >
                Tab 1
              </button>
              <button
                className={`tab-button ${openedTab === 1 && "active"}`}
                onClick={() => handleTabClick(1)}
              >
                Tab 2
              </button>
              <button
                className={`tab-button ${openedTab === 2 && "active"}`}
                onClick={() => handleTabClick(2)}
              >
                Tab 3
              </button>
            </div>

            <CardContainer cards={tabData[openedTab]} />

            <div className="navigation-buttons">
              <button onClick={() => handleButtonClick(-1)}>
                &lt; Previous
              </button>
              <button onClick={() => handleButtonClick(1)}>Next &gt;</button>
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

// Container component to display the cards for the active tab
function CardContainer({ cards }) {
  return (
    <div className="card-container">
      <Card cardObj={cards[0]} />
      {cards[1] && <Card cardObj={cards[1]} />}
    </div>
  );
}

// Component to render individual card information
function Card({ cardObj }) {
  return (
    <div className="card">
      <img className="card-image" src={cardObj.imageUrl} alt={cardObj.title} />
      <div className="card-content">
        <h2 className="card-title">{cardObj.title}</h2>
        <p className="card-description">{cardObj.description}</p>
        <p className="card-date">{cardObj.date}</p>

        {/* Tags section */}
        <div className="card-tags">
          <CardTag tag={cardObj.tags[0]} />
          {cardObj.tags[1] && <CardTag tag={cardObj.tags[1]} />}
          {cardObj.tags[2] && <CardTag tag={cardObj.tags[2]} />}
        </div>
      </div>
    </div>
  );
}

// Component to render individual tag
function CardTag({ tag }) {
  return <span className="card-tag">{tag}</span>;
}

// Footer component listing the technologies used in the project
function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Technologies used:</strong> React, JSX, useState, Conditional
        Rendering, CSS Modules, Event Handling.
      </p>
    </footer>
  );
}
