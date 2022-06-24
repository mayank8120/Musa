import React from 'react'
import { CommonLawMarriages, CousinMarriages, MarriageAgeRequirements, MarriageBloodTestRequirements, MarriageCertificateafterMarriageCeremony, MarriageIDRequirements, marriageLawsList, MarriageLicenseFees, MarriageResidencyRequirement, MarriageWaitingPeriodAfterApplication, MarriageWaitingPeriodAfterReceivingMarriageLicense, MarriageWitnessesRequirements, navigationList, ProxyMarriages, RecordingofMarriageLicenseafterMarriageCeremony, weddingCeremoniesList, WeddingOfficiantsRequirements } from '../../constants/JSONS';
import BannerSmallCards from '../../containers/BannerSmallCards'
import OneHeadingParas from '../../containers/AccordianCards/OneHeadingParas';
import LongContentCard from '../../containers/LongContentCard';
import { getClassForNav, swipeUpDownPageOnClick, useScrollPositionHook } from '../../Functions/functions'
import OneHeadingBullets from '../../containers/AccordianCards/OneHeadingBullets';
import InsideAccorList from '../../containers/AccordianCards/InsideAccorList';


const MarriageLaws = () => {





    const pageLocation = window.location.href;


    const scrollPos = useScrollPositionHook();
    console.log(scrollPos);












    return (
        <>
            <div className='bgGrey'>
                <div class="usMarr_breadcrumb">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                                <li class="breadcrumb-item fontSize14"><a href="#">Marriage Laws</a></li></ol>
                        </nav>
                    </div>
                </div>



                <div class="usMarr_page">
                    <div class="container">
                        <div class="pageTitle">
                            <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">State Marriage Laws</h1>
                            <p class="mb-0 fontSize16 fontWeight400 primaryColor">Find marriage laws based on your state</p>

                        </div>
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                <div class="tabPage">
                                    <div class="row">
                                        <div class="pageTitle">
                                            <h1 class="fontSize32 fontWeight700 primaryColor fontFamily2">All you need to know about Marriage Laws</h1>
                                            <p class="mb-0 fontSize16 fontWeight400 primaryColor">Find more information about marriage laws in the USA</p>

                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                            <div class="leftTabList">
                                                <ul>
                                                    {
                                                        marriageLawsList.map(
                                                            (item, index) => (
                                                                <>
                                                                    {/* <li class={getClassForNav(scrollPos, index, item.idname)}>
                                                                        <a href={`#${item.idname}`}>{item.title}</a>
                                                                    </li> */}
                                                                    <li >
                                                                        <a href={`#${item.idname}`}>{item.title}</a>
                                                                    </li>
                                                                </>
                                                            )
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">


                                            <div class="tabsContantBox">
                                                <OneHeadingBullets classNm={'dskhb'} data={MarriageIDRequirements} />
                                                <OneHeadingParas data={MarriageResidencyRequirement} />
                                                <InsideAccorList data={MarriageWaitingPeriodAfterApplication} />
                                                <InsideAccorList data={MarriageWaitingPeriodAfterReceivingMarriageLicense} />

                                                <OneHeadingParas data={MarriageLicenseFees} />
                                                <OneHeadingParas data={MarriageBloodTestRequirements} />
                                                <OneHeadingParas data={MarriageAgeRequirements} />
                                                <OneHeadingParas data={ProxyMarriages} />
                                                <OneHeadingParas data={CousinMarriages} />
                                                <OneHeadingParas data={CommonLawMarriages} />

                                                <OneHeadingBullets data={WeddingOfficiantsRequirements} />
                                                <OneHeadingParas data={MarriageWitnessesRequirements} />
                                                <OneHeadingParas data={RecordingofMarriageLicenseafterMarriageCeremony} />
                                                <OneHeadingParas data={MarriageCertificateafterMarriageCeremony} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div class="stateRightPage">


                                    <BannerSmallCards
                                        mainDivColor={'marriage_Record'}
                                        boxSpecificImage={`marrgeRecord`}
                                        boxTitle={"Marriage Records Search"} />


                                    <div class="creditScore mb-24">
                                        <img class="" src={require(`../../assets/img/creditScore.png`).default} />
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

            </div>


        </>
    )
}

export default MarriageLaws