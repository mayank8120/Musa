import React from 'react'
import AccordianProcess from './AccordianProcess'

const ImmigrationPrcssIntrv = ({ data }) => {
   
    return (
        <>

            <div class="contentBox brdrRadius4" id={data.id}>
                <h3 class={`fontSize18 fontWeight700 primaryColor mb-0`}>{data.heading}</h3>
                <div class="contentDet">

                    <AccordianProcess data={data.accordians} />

                </div>
            </div>

        </>
    )
}

export default ImmigrationPrcssIntrv