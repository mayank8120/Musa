import React from 'react'


const BannerSmallCards = ({ boxTitle, boxSpecificImage, mainDivColor }) => {
    return (
        <>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class={`${mainDivColor} brdrRadius4 colordBox`}>
                    <div class="d-flex align-items-top">
                        <img src={require(`../assets/img/${boxSpecificImage}.svg`).default} />
                        <div class="ms-auto">
                            <a href="#" class="nextStepCircle brdrRadius50">
                                <img src={require('../assets/img/rightArrw.svg').default} alt="rightArrw" />
                            </a>
                        </div>
                    </div>
                    <div class="boxTitle">
                        <h2 class="fontWeight700 fontSize24 whiteColor mb-0">{boxTitle}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSmallCards