import React from 'react'

const WhyShopWithUsBox = ({info}) => {
  return (
    <div className="col-md-3">
                  <div className="box ">
                     <div className="img-box">
                        <span dangerouslySetInnerHTML={{__html : info.icon}}></span>
                     </div>
                     <div className="detail-box">
                        <h5>
                           #{info.title}
                        </h5>
                        <p>
                           {info.text}
                        </p>
                     </div>
                  </div>
               </div>
  )
}

export default WhyShopWithUsBox