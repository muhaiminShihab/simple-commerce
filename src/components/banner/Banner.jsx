import React from 'react'
import BannerImage from '../../assets/images/banner.jpg'

function Banner() {
  return (
    <section className="banner-area mt-150 mb-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center banner-image">
                        <img src={BannerImage} alt="Banner" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner