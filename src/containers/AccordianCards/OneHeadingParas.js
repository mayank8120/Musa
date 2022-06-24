import React from 'react'
import { Accordion } from 'react-bootstrap'

const OneHeadingParas = ({ classNm, data }) => {
    return (
        <>



            <Accordion defaultActiveKey="0" className={`contentBox brdrRadius4 accordionBox`} alwaysOpen>
                <Accordion.Item eventKey="0" alwaysOpen>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                        {
                            data.list.map(
                                (listitem) => (
                                    <p>{listitem}</p>
                                )
                            )
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default OneHeadingParas