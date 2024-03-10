import React from 'react';

const Pricing = ({section}) => {
  console.log(section)

  return (
    <section id={section} className='my-32'>
      <div style={{ gap: 16 }}>
        <h3 id="title-team">Pricing</h3>
        <p className="sub-title-team"style={{ marginBottom:"32px" }}>The cost of a web or android app development can vary significantly depending on the specifications (functions) of the application itself. We provide this price range as an estimate or approximation only before providing a detailed offer to you. So, consider this just a guide.</p>
        <table style={{ borderCollapse: 'collapse', width: '100%', tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '50%' }} />
            <col style={{ width: '50%' }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ border: '2px solid rgba(78, 150, 225, 0.2)', padding: '8px' }}></th>
              <th style={{ 
                fontFamily: 'Open Sans',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '22px',
                letterSpacing: '-0.07em',
                textAlign: 'center',
                color: '#333333', // ubah background menjadi #333333
                // color: '#FFFFFF', // tambahkan properti color jika tidak ada
                padding: '8px', // sesuaikan padding dengan kebutuhan
                border: '2px solid rgba(78, 150, 225, 0.2)' // tambahkan properti border
              }}>
                Estimated Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '2px solid rgba(78, 150, 225, 0.2)', padding: '8px' }}>
                 <div className='d-flex flex-column justify-content-start' style={{ paddingLeft: '60px', paddingTop: '8px', paddingBottom: '8px' }}>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333', // tambahkan properti color jika tidak ada
                    margin: '0' // Tambahkan margin-bottom untuk jarak antara paragraf pertama dan kedua
                  }}>
                    E-Commerce
                  </p>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333CC', // ubah warna teks menjadi #333333CC
                    margin: '0' // pastikan margin diatur menjadi 0 agar tidak ada spasi tambahan
                  }}>
                    Common Online Shop, Bakery Shop, Clinical Medicine Shop
                  </p>
                </div>
              </td>
              <td style={{ 
                border: '2px solid rgba(78, 150, 225, 0.2)', 
                padding: '8px', 
                fontFamily: 'Open Sans', 
                fontSize: '24px', 
                fontWeight: 800, 
                lineHeight: '32px', 
                letterSpacing: '-0.07em', 
                textAlign: 'center', 
                color: '#000000', 
              }}>
                Rp 1~25mio
              </td>
            </tr>
            <tr>
              <td style={{ border: '2px solid rgba(78, 150, 225, 0.2)', padding: '8px' }}>
                 <div className='d-flex flex-column justify-content-start' style={{ paddingLeft: '60px', paddingTop: '8px', paddingBottom: '8px' }}>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333', // tambahkan properti color jika tidak ada
                    margin: '0' // Tambahkan margin-bottom untuk jarak antara paragraf pertama dan kedua
                  }}>
                    E-Commerce
                  </p>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333CC', // ubah warna teks menjadi #333333CC
                    margin: '0' // pastikan margin diatur menjadi 0 agar tidak ada spasi tambahan
                  }}>
                    Common Online Shop, Bakery Shop, Clinical Medicine Shop
                  </p>
                </div>
              </td>
              <td style={{ 
                border: '2px solid rgba(78, 150, 225, 0.2)', 
                padding: '8px', 
                fontFamily: 'Open Sans', 
                fontSize: '24px', 
                fontWeight: 800, 
                lineHeight: '32px', 
                letterSpacing: '-0.07em', 
                textAlign: 'center', 
                color: '#000000', 
              }}>
                Rp 1~25mio
              </td>
            </tr>
            <tr>
              <td style={{ border: '2px solid rgba(78, 150, 225, 0.2)', padding: '8px' }}>
                 <div className='d-flex flex-column justify-content-start' style={{ paddingLeft: '60px', paddingTop: '8px', paddingBottom: '8px' }}>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333', // tambahkan properti color jika tidak ada
                    margin: '0' // Tambahkan margin-bottom untuk jarak antara paragraf pertama dan kedua
                  }}>
                    E-Commerce
                  </p>
                  <p style={{ 
                    fontFamily: 'Open Sans',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '-0.07em',
                    textAlign: 'left',
                    color: '#333333CC', // ubah warna teks menjadi #333333CC
                    margin: '0' // pastikan margin diatur menjadi 0 agar tidak ada spasi tambahan
                  }}>
                    Common Online Shop, Bakery Shop, Clinical Medicine Shop
                  </p>
                </div>
              </td>
              <td style={{ 
                border: '2px solid rgba(78, 150, 225, 0.2)', 
                padding: '8px', 
                fontFamily: 'Open Sans', 
                fontSize: '24px', 
                fontWeight: 800, 
                lineHeight: '32px', 
                letterSpacing: '-0.07em', 
                textAlign: 'center', 
                color: '#000000', 
              }}>
                Rp 1~25mio
              </td>
            </tr>
            {/* Tambahkan baris lainnya di sini */}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Pricing;
