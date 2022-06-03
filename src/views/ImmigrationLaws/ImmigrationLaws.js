import React, { useEffect } from 'react'
import { immigrationLawsContent } from '../../constants/JSONS'
import BannerSmallCards from '../../containers/BannerSmallCards'
import LongContentCard from '../../containers/LongContentCard'
import { getCurrentState, getLocationParaCount } from '../../Functions/functions'

// import '../../assets'

const ImmigrationLaws = () => {


    const pageLocation = window.location.href;

    const getCurrentState = (str) => {
        let pageurl = pageLocation;
        const splitarr = pageurl.split("#");
        let flag = false;
        for (let obj in splitarr) {
            if (splitarr[obj] === str) {
                flag = true;
            }
        }
        return flag;
    }


    const getLocationParaCount = () => {
        let pageurl = pageLocation;
        const splitarr = pageurl.split("#");
        return splitarr.length;
    }


    return (



        <>



            <div class="usMarr_breadcrumb">
                <div class="container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                            <li class="breadcrumb-item fontSize14"><a href="#">Los Angeles</a></li>
                            <li class="breadcrumb-item active fontSize14" aria-current="page">Family Laws</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div class="usMarr_page">
                <div class="container">
                    <div class="pageTitle">
                        <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">Family Laws in Los Angeles</h1>
                        <p class="mb-0 fontSize16 fontWeight400 primaryColor">Here are some family laws that you might want to consider for marriage in Los Angeles</p>
                    </div>


                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                            <div class="tabPage">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div class="leftTabList">
                                            <ul>
                                                <li class={getLocationParaCount() == 1 || getCurrentState("mrrg") === true ? `active` : ""}><a href="#mrrg">Marriage and Income Tax</a></li>
                                                <li class={getCurrentState("dvrc") ? `active` : ""}><a href="#dvrc">Divorce and Income Tax</a></li>
                                                <li class={getCurrentState("almny") ? `active` : ""}><a href="#almny">Alimony</a></li>
                                                <li class={getCurrentState("chldspprt") ? `active` : ""}><a href="#chldspprt">Child Support</a></li>
                                                <li class={getCurrentState("rtrnrng") ? `active` : ""}><a href="#rtrnrng">Returning The Engagement Ring</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                                        {
                                            immigrationLawsContent.map(
                                                (data) => (
                                                    <LongContentCard heading={data.heading} para={data.paras} id={data.id} />
                                                )
                                            )
                                        }

                                    </div>






                                </div>
                            </div>
                        </div>



                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="stateRightPage">
                                <BannerSmallCards
                                    mainDivColor={'wedding_laws'}
                                    boxSpecificImage={'court'}
                                    boxTitle={'Find Wedding Laws in Every State'} />



                                <div class="creditScore">
                                    <img src={require('../../assets/img/creditScore.png').default} />
                                </div>
                                <BannerSmallCards
                                    mainDivColor={'divorce_recod'}
                                    boxSpecificImage={'wedngLaws'}
                                    boxTitle={'Divorce Records Search'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ImmigrationLaws