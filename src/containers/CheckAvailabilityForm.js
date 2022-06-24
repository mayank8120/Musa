import React from 'react'

const CheckAvailabilityForm = () => {
    return (
        <div>




            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class={`brdrRadius4 colordBox`}>
                    <div>


                        <h3>Check Availability</h3>
                        <h6>You are going to check Norwalk Los Angeles County availability, fill the form below to continue</h6>

                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div>
                                        <input type="text"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div>
                                        <input type="text" 
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div>
                                        <input type="email"
                                            placeholder="Email"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div>
                                        <div >
                                            <input type="date"
                                                placeholder="Wedding Date" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div>
                                        <textarea  rows="3"
                                            placeholder=""
                                            value={'Hi, I am interested about wedding licensing information from Norwalk Los Angeles County'}
                                            required></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">



                                    <div>
                                        <div>
                                            <button type="submit">Check Availability</button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div >







        </div >
    )
}

export default CheckAvailabilityForm