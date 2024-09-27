import { useState } from "react";

import { useParams } from "react-router-dom";

const TABS = [
  {
    id: "dashboar",
    title: "DASHBOARD",
  },
  {
    id: "quote",
    title: "QUICK QUOTE",
  },
  {
    id: "rate",
    title: "RATE & SHIP",
  },
  {
    id: "history",
    title: "HISTORY & TRACKING",
  },
  {
    id: "account",
    title: "MY ACCOUNT",
  },
];

const App = () => {
  const [activeTabId, setActiveTabId] = useState(null);
  const { userId } = useParams();

  const handleActiveTab = (id) => () => setActiveTabId(id);

  return (
    <div className="app">
      <div className="tabs_container">
        {TABS.map(({ id, title }) => (
          <div
            className={`tab_container ${
              activeTabId === id ? "tab_container_active" : ""
            }`}
            key={id}
            onClick={handleActiveTab(id)}
          >
            {title}
          </div>
        ))}
      </div>

      <div className="content_container">
        <div>{activeTabId}</div>
      </div>
    </div>
  );
};

export default App;
