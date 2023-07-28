import React from 'react';

function Portofolio({data}) {
  // console.log(data.project)
  return (
    <section id="portofolio" style={{
      marginTop: 64
    }}>
      <h3 className='title-port'>{data.title}</h3>
      <div class="card-body">
        {data
          .project
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

    </section>
  )
}
export default Portofolio