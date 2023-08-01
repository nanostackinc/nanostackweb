import React from "react";
import Tabs from "../components/Tabs";
import './tabs.css'
const TabContent = () => {
  const tabsData = [
    {
      title: "Tab 1",
      content: (
        <div>
          <h2>This is the content of Tab 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur vehicula consequat ipsum, quis euismod massa gravida ac.
            Fusce ullamcorper facilisis mauris, quis tincidunt orci dapibus sit amet.
          </p>
        </div>
      ),
    },
    {
      title: "Tab 2",
      content: (
        <div>
          <h2>This is the content of Tab 2</h2>
          <p>
            Ut sit amet nibh vel mauris gravida auctor. Duis ultrices purus id erat
            tempor, non tincidunt arcu viverra. Etiam mattis erat ut libero pretium
            placerat. Nam varius orci nec ipsum tincidunt convallis.
          </p>
        </div>
      ),
    },
    {
      title: "Tab 3",
      content: (
        <div>
          <h2>This is the content of Tab 3</h2>
          <p>
            Aenean tincidunt sit amet mauris eget faucibus. Vivamus ut feugiat nisl.
            Nulla facilisi. Vestibulum ac nisi sit amet nunc ultrices volutpat.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <h1>React Tabs Example</h1>
      <Tabs tabsData={tabsData} />
    </div>
  );
};

export default TabContent;
