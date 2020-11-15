import React from 'react';
import {Form,Col,FormGroup,Label,Input,Button, Row} from 'reactstrap' 

function NewsLetter(){
    return(
        <div className="row py-5 px-5 text-center newsletters">
                <div className="col-12 mb-5">
                    <h1 className="mb-3">Subscripe To The Newletters</h1>
                    <h6>subscripe to the newsleters and get 10%OFF for your first purchase</h6>
                </div>
                <div className="col-4 mx-auto">
                <Form inline>
                    <FormGroup row className="inputnews">
                    <Label for="email" sm={2} size="lg">Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder="Exemple@gmail.com" bsSize="lg" />
                    </Col>
                    </FormGroup>
                    <Button >Subscripe</Button>
                </Form>
                </div>
            </div>
    );
}
export default NewsLetter;

            