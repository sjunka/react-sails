import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Contact = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Contact me!</h1>
        <p className="lead">
          This is a simple contact information dialog.
        </p>
        <p className="lead">
          <Button color="primary">Let's connect</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Contact;
