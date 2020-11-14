import React from 'react';
import {Form,Col,FormGroup,Label,Input,Button, Row} from 'reactstrap' 

function NewsLetter(){
    return(
        <Form inline>
            <FormGroup row className="inputnews">
            <Label for="email" sm={2} size="lg">Email</Label>
            <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="Exemple@gmail.com" bsSize="lg" />
            </Col>
            </FormGroup>
            <Button >Subscripe</Button>
        </Form>
    );
}
export default NewsLetter;