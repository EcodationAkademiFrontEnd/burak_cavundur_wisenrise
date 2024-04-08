import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import ilber from '../img/ilber-ortayli-cc.jpg'
import ilberAd from '../img/ilber-ortayli.png'
import burcu from '../img/burcu-esmersoy-cc.jpg'
import burcuAd from '../img/burcu-esmersoy.png'
import yuce from '../img/yuece-zerey-cc.jpg'
import yuceAd from '../img/yuce-zerey.png'
import ali from '../img/ali-yesilirmak-cc.jpg'
import aliAd from '../img/ali-yesilirmak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Favorites = () => {
  return (
    <section className='sec-bg-black'>
        <div className='container'>
        <div className='border-red ml-0'></div>
                <div className='text-start mb-2'>
                    <h3>Herkesin Bir Potansiyeli Vardır! </h3>
                    <p> Yeni Olasılıkların Kilidini Aç ve Becerilerini Geliştir.</p>
                </div>
            <div>
            <Row xs={1} md={4} className="g-1 card-hover">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={ilber} />
            <Card.Body>
                <div>
                <Card.Link to="/"><Card.Img src={ilberAd} /></Card.Link>
                <div className='m-auto'>
                    <div className='ws-card-line'></div>
                </div>
              <Card.Text>Hayata Yön Vermek</Card.Text>
                </div>

              <div>
              <Button variant="btn-danger w-y65"><FontAwesomeIcon icon={faPlay} size="1x"/> Şimdi İzle</Button>
              <Button variant="btn-card-light mt-1 w-y65">Şimdi İzle</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={burcu} />
            <Card.Body>
                <div>
                <Card.Link to="/"><Card.Img src={burcuAd} /></Card.Link>
                <div className='m-auto'>
                    <div className='ws-card-line'></div>
                </div>
              <Card.Text>Güzellik</Card.Text>
                </div>

              <div>
              <Button variant="btn-danger w-y65"><FontAwesomeIcon icon={faPlay} size="1x"/> Şimdi İzle</Button>
              <Button variant="btn-card-light mt-1 w-y65">Şimdi İzle</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={yuce} />
            <Card.Body>
                <div>
                <Card.Link to="/"><Card.Img src={yuceAd} /></Card.Link>
                <div className='m-auto'>
                    <div className='ws-card-line'></div>
                </div>
              <Card.Text>Pazarlama Şifreleri</Card.Text>
                </div>

              <div>
              <Button variant="btn-danger w-y65"><FontAwesomeIcon icon={faPlay} size="1x"/> Şimdi İzle</Button>
              <Button variant="btn-card-light mt-1 w-y65">Şimdi İzle</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={ali} />
            <Card.Body>
                <div>
                <Card.Link to="/"><Card.Img src={aliAd} /></Card.Link>
                <div className='m-auto'>
                    <div className='ws-card-line'></div>
                </div>
              <Card.Text>Köpek Eğitimi</Card.Text>
                </div>

              <div>
              <Button variant="btn-danger w-y65"><FontAwesomeIcon icon={faPlay} size="1x"/> Şimdi İzle</Button>
              <Button variant="btn-card-light mt-1 w-y65">Şimdi İzle</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </div>
        </div>
    </section>
  )
}

export default Favorites