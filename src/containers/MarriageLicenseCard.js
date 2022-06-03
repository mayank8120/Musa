import React from 'react'

const MarriageLicenseCard = () => {
    return (
        <>
            <div class="marrLicense">
                <div class="container">
                    <div class="marrge_licnse brdrRadius4">
                        <div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div class="licnseTitl">
                                    <h3 class="fontWeight700 mb-0 primaryColor fontFamily2">How to Obtain a<br /> Marriage License?</h3>
                                    <p class="fontSize14 fontWeight400 primaryColor mt-3">When applying for a marriage license, you need
                                        these documents</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <div class="documntList">
                                    <ul>
                                        <li>Driver’s License or Passport</li>
                                        <li>Proof of citizenship and/or residence</li>
                                        <li>A birth certificate to show your age</li>
                                        <li>Proof of parental consent and/or court consent if underage</li>
                                        <li>A death certificate if you are widowed or divorce decree if you are divorced</li>
                                        <li>Blood test results (sometimes necessary)</li>
                                    </ul>
                                    <button href="#" class="orangeBtn brdrRadius4 fontWeight700 fontSize16">Call to Action</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarriageLicenseCard