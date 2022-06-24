import React from 'react'
import { Accordion } from 'react-bootstrap'
import { repeatingColorList } from '../../constants/JSONS'
import AccordianImmi from '../../views/ImmigrationLaws/AccordianImmi'

const InsideAccorList = ({ data }) => {
    return (
        <>



            <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4 accordionBox`} alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        {
                            data.accordians.map(
                                (data, index) => (
                                    <AccordianImmi data={data} color={repeatingColorList[index]} />
                                )
                            )
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}

export default InsideAccorList