import React from 'react'

const Liste = ({ kisiler }) => {

  return (
    <div>
      {
        kisiler.map((kisi) => {
          const { isim, resim, yas, id } = kisi;

          return (
            <div key={id} className='kisi'>
              <img src={resim} alt="" />
              <div>
                <h4>{isim}</h4>
                <p>{yas}</p>
              </div>

            </div>
          )
        }
        )
      }
    </div>

  )
}


export default Liste
