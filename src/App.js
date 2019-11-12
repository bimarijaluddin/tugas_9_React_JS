import React, {Component} from 'react';
import {Container, Navbar, Nav, NavDropdown,Form, FormControl, Button, Row, Col, Breadcrumb, Spinner, Tabs, Tab, Table, ProgressBar, Pagination, OverlayTrigger, Popover, Collapse} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={klik : true};
  }

  render(){

    const munculpopover = <Popover title="overlay">
    Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
    </Popover>

    return(
      <Container>
        <Navbar bg="dark" variant="dark" expand="xl">
          <Navbar.Brand href="#">Akses Spot</Navbar.Brand>
            
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Berita">Berita</Nav.Link>
              <Nav.Link href="#LiveScores">LiveScores</Nav.Link>
              <NavDropdown title="Piala & Liga">
                <NavDropdown.Item href="#">Italia</NavDropdown.Item>
                <NavDropdown.Item href="#">Spanyol</NavDropdown.Item>
                <NavDropdown.Item href="#">Inggris</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#TransferPemain">Transfer Pemain</Nav.Link>
              <Nav.Link href="#Tim">Tim</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>

        </Navbar>

        <Row>
          <Col md={4}></Col>
          <Col md={{span:4, offset:4}}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row> <br/>
        
        <Row>
          <Col><h3>Rumor Transfer Pemain</h3></Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <Spinner animation="border" variant="info" /> <Spinner animation = "grow" variant="info" />
          </Col>
        </Row>
        <br/>

        <Tabs defaultActiveKey="Semua Transfer">
          <Tab eventKey="semua_transfer" title="Semua  Transfer"> <br />
            <Table hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELANI</td>
                  <td>MANCHASTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td><ProgressBar animated now={85} label="75%" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td><ProgressBar animated now={56} label="56%" /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td><ProgressBar animated now={95} label="95%" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PETERBUG</td>
                  <td><ProgressBar animated now={100} label="100%" /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHI BATSUAVYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td><ProgressBar animated now={50} label="50%" /></td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="liga_premier_inggris" title="Liga Premier Inggris">
            <p>Liga Premier Inggris</p>
          </Tab>
          <Tab eventKey="serie_a" title="Serie A">
            <p>Serie A</p>
          </Tab>
        </Tabs>
        <br />

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>

        <br/>

        <Row>
          <Col>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={munculpopover} >

              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>

            
          </Col>
          <Col>
            <Button variant="primary" onClick={()=>this.setState({klik : !this.state.klik})}>Versi Website</Button>

            <Collapse in={this.state.klik}>
              <p>Akses Sport v.10</p>
            </Collapse>
          </Col>
        </Row>
        

      </Container>      
    );
  }
}

export default App;
