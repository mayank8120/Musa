import React from 'react'
import { repeatingColorList } from '../../constants/JSONS'
import AccordianImmi from './AccordianImmi'

const ImmigrationLawsListsItem = ({ data }) => {
    return (
        <>
            <div class="contentBox brdrRadius4" id={data.id}>
                <h3 class="fontSize18 fontWeight700 primaryColor mb-0">
                    {data.heading}
                </h3>
                <div class="contentDet">
                    <div class="accordion" id="accordionExample">
                        {
                            data.accordians.map(
                                (data, index) => (
                                    <AccordianImmi data={data} color={repeatingColorList[index]} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImmigrationLawsListsItem