import React from "react";
import Tabs from "../components/Tabs";
import {Android, Website, Product} from "../assets";
import './tabs.css'
const TabContent = () => {
  const tabsData = [
    {
      title: (<img src={Website} alt="image.svg"/>),
      content: (
        <>
       <h3 className='title-port'>{data.title}</h3>
      <div class="card-body">
        {data
          .website
          .map((item) => {
            const isEvenId = item.id % 2 === 0;
            const colClassImg = isEvenId
            ? "col-md-5 order-md-2"
            : "col-md-5 ";
            const colClassText = isEvenId
            ? "col-md-5 order-md-1 "
            : "col-md-6 ";
            return (
              <div className="card-portofolio row g-0" key={item.id}>
                <div className={colClassImg} id='card-col'>
                  <img
                    src={item.image}
                    className="car-card img-fluid rounded-start"
                    alt="image.png"/>
                </div>
                <div className={colClassText}>
                  <div className="text-card">
                    <h5 className="card-title mt-4">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      </>
      )
    }, {
      title: (<img src={Android} alt="image.svg"/>),
      content: (
        <div>
          <h2>This is the content of Tab 2</h2>
          <p>
            Ut sit amet nibh vel mauris gravida auctor. Duis ultrices purus id erat tempor,
            non tincidunt arcu viverra. Etiam mattis erat ut libero pretium placerat. Nam
            varius orci nec ipsum tincidunt convallis.
          </p>
        </div>
      )
    }, {
      title: (<img src={Product} alt="image.svg"/>),
      content: (
        <div>
          <h2>This is the content of Tab 3</h2>
          <p>
            Aenean tincidunt sit amet mauris eget faucibus. Vivamus ut feugiat nisl. Nulla
            facilisi. Vestibulum ac nisi sit amet nunc ultrices volutpat.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="App">
     <h3 className='title-port'>{data.title}</h3>
      <Tabs tabsData={tabsData}/>
    </div>
  );
};

export default TabContent;
