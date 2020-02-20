import React from 'react';
import {Row, Col} from 'react-bootstrap';
import TextSubheader from '../../../components/Texts/TextSubheader/TextSubheader';
import TextHeader from '../../../components/Texts/TextHeader/TextHeader';
import TextParagraph from '../../../components/Texts/TextParagraph/TextParagraph';
import Aux from '../../../hoc/Aux';

const about = () => {
  return (
    <Aux>
        <Row>
            <Col>
                <TextHeader text={"About"} />
            </Col>
        </Row>
        <Row>
            <Col>
                <TextSubheader text={"Lorem Ipsum Dolor"} />
            </Col>
        </Row>
        <Row>
            <Col>
                <TextSubheader text={"Lorem Ipsum Dolor"} />
            </Col>
        </Row>
        <Row>
            <Col>
                <TextParagraph text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
            </Col>
        </Row>
    </Aux>

  );
}

export default about;

