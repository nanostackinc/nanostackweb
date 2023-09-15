import React from 'react';

const Team = ({ data }) => {
  return (
    <section id="our-team">
      <div style={{gap:16}}>
      <h3 id="title-team">{data.title}</h3>
      <p className="sub-title-team">{data.sub_title}</p>
      </div>
      <div
        className="card-group mx-auto"
        style={{
          gap: 32,
        }}
      >
        {data.data_member.map((item, index) => {
    
          return (
            <div
              className="card"
              id="card-team"
              key={index}
              
            >
              <img className="card-img-top" style={{borderRadius:30}} src={item.images} alt="Card image cap" />
            
                <div className='d-absolute'>
                <h5 className="card-title">{item.name}</h5>
                <p className="text-position">{item.position}</p>
                </div>
              
                {item.sertifikat.map((sertif) => {
                  return (
                    <div>
                    <p className="text-sertif">{sertif.sertif_1}</p>
                      <p className="text-sertif">{sertif.sertif_2}</p>
                      <p className="text-sertif">{sertif.sertif_3}</p>
                      <p className="text-sertif">{sertif.sertif_4}</p>
                    </div>
                      );
                    })}
              {/* <div className='d-block p-2 bg-primary' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}> */}
          <a href={item.linkedin} target='_blank' className='btn-linkedin d-flex' style={{ width: '100%', textDecoration:"none" }}>
                {/* <button className="btn-linkedin"> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <rect x="0.5" width="20" height="20" rx="1.6" fill="#006699" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.69344 15.5615V7.91036H4.15033V15.5615H6.69344ZM5.42187 6.86572C6.30871 6.86572 6.86069 6.27820 6.86069 5.54396C6.84416 4.79320 6.30871 4.22198 5.43870 4.22198C4.56878 4.22198 4 4.79320 4 5.54396C4 6.27820 4.55186 6.86572 5.40530 6.86572H5.42187Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.10059 15.5615H10.6437V11.2888C10.6437 11.0601 10.6602 10.8317 10.7273 10.6682C10.9112 10.2113 11.3296 9.73813 12.0322 9.73813C12.9524 9.73813 13.3205 10.4398 13.3205 11.4683V15.5615H15.8634V11.1745C15.8634 8.82436 14.6088 7.73082 12.9356 7.73082C11.5637 7.73082 10.9614 8.49766 10.6268 9.01998H10.6437V7.91036H8.10066C8.13403 8.62829 8.10059 15.5615 8.10059 15.5615Z" fill="white" />
                  </svg>
                  Learn more
                {/* </button> */}
              </a>
              
              {/* </div> */}
              </div>
            
       
          );
        })}
      </div>
    </section>
  );
};

export default Team;
