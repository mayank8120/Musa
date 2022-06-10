import React from 'react'
import BannerSmallCards from '../../containers/BannerSmallCards'
import Footer from '../../containers/Footer'
import MarriageLicenseApplicationProcedure from '../../containers/MarriageLicenseApplicationProcedure'
import NavBar from '../../containers/NavBar'
import StateListAndSearch from '../../containers/StateListAndSearch'
import GovtIssueComponent from '../GovtIssuedcard/GovtIssueComponent'
import StatePageMidSection from './StatePageMidSection'



const StatePage = () => {
    return (
        <div class='bgGrey'>


            {/* <!--breadcrumb--> */}
            <div class="usMarr_breadcrumb">
                <div class="container">
                    <nav>
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item fontSize14"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active fontSize14" aria-current="page">Los Angeles</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <StatePageMidSection />
            <GovtIssueComponent />


            <MarriageLicenseApplicationProcedure />

            <StateListAndSearch />

        </div>
    )
}

export default StatePage