import React from 'react'
import { Accordion } from 'react-bootstrap'
import { repeatingColorList } from '../../constants/JSONS'

const AccordianProcess = ({ data }) => {



    return (
        <>

            {data.map(

                (data, index) => (

                    <Accordion defaultActiveKey="0" className={`${repeatingColorList[index]} accordionBox`} alwaysOpen>
                        <Accordion.Item eventKey="0" alwaysOpen>
                            <Accordion.Header>{data.heading}</Accordion.Header>
                            <Accordion.Body>
                                <div class="accordionListing">
                                    {
                                        data.paras.map(
                                            (listitem) => (
                                                <p class="fontSize16 fontWeight400 primaryColor">
                                                    {listitem}
                                                </p>
                                            )
                                        )
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                )

            )}



            {/* <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.heading}</Accordion.Header>
                    <Accordion.Body>
                        <ul class="accordionListing">
                            {
                                data.AccList.map(
                                    (listitem) => (
                                        <p class="fontSize16 fontWeight400 primaryColor">The INS will send you 3 or 4 receipts.
                                            Keep them safe as you will need them.You may also receive a text message from INS on
                                            your phone.
                                        </p>
                                    )
                                )
                            }
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion> */}


        </>
    )
}

export default AccordianProcess