import React from 'react'
import BannerSmallCards from '../../../containers/BannerSmallCards'
import BigBannerWIthSearch from './BigBannerWIthSearch'

// import '../../../assets'

const MainBanner = () => {
    return (
        <div class="usMarr_banner">
            <div class="container">
                <div class="row">

                    <BigBannerWIthSearch />

                    <div class="col-lg-5 pl-0">
                        <div class="row">
                            <BannerSmallCards
                                mainDivColor={'marriage_Record'}
                                boxSpecificImage={`marrgeRecord`}
                                boxTitle={"Marriage Records Search"} />

                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="creditScore">
                                    <img class="w-100" src={require('../../../assets/img/creditScore.png').default} />
                                </div>
                            </div>

                            <BannerSmallCards
                                mainDivColor={'wedding_laws'}
                                boxSpecificImage={'court'}
                                boxTitle={'Find Wedding Laws in Every State'} />

                            <BannerSmallCards
                                mainDivColor={'divorce_recod'}
                                boxSpecificImage={'wedngLaws'}
                                boxTitle={'Divorce Records Search'} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner