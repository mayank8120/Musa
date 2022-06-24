import React from 'react'
import { Accordion } from 'react-bootstrap'

const OneHeadingBullets = ({ classNm, data }) => {
    return (
        <>
            <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4  accordionBox`} alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        <p>{data.para}</p>
                        <ul class="accordionListing">
                            {
                                data.list.map(
                                    (listitem) => (
                                        <li class="fontSize16 fontWeight400 primaryColor">{listitem}</li>
                                    )
                                )
                            }
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </>
    )
}

export default OneHeadingBullets