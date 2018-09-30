import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Separator from "../Separator";
import SimpleModal from "../UI/SimpleModal";

import {
  FooterContainer,
  Wave,
  TopContent,
  Logo,
  TopContentTitle,
  TopContentItem,
  BottomContent,
  MapContainer
} from "./styles";

class Footer extends React.Component {
  state = {
    isMapModalVisible: false
  };
  toggleMapModal = () => {
    this.setState({
      isMapModalVisible: !this.state.isMapModalVisible
    });
  };
  render() {
    return (
      <FooterContainer marginTop={this.props.marginTop}>
        <Wave />
        <TopContent>
          <Logo>
            <img src="/static/images/logo-white.svg" alt="CodumAcademy" />
          </Logo>
          <div>
            <TopContentItem
              itemScope
              itemType="http://schema.org/EducationalOrganization"
            >
              <TopContentTitle>Contacto</TopContentTitle>
              <a
                className="small-light"
                href="mailto:codumacademy@imaginamos.co"
                itemProp="email"
                content="codumacademy@imaginamos.co"
              >
                codumacademy@imaginamos.co
              </a>
              <p>(+57) 350 471 93 14</p>
            </TopContentItem>
            <TopContentItem
              itemScope
              itemType="http://schema.org/EducationalOrganization"
            >
              <TopContentTitle>Horario de atención</TopContentTitle>
              <div
                className="small-light"
                itemScope
                itemType="http://schema.org/LocalBusiness"
              >
                <span
                  itemProp="openingHours"
                  content="Mo,Tu,We,Th,Fr 08:00-18:00"
                >
                  Lunes a viernes <br />
                  8:00 AM - 6:00 PM
                </span>
              </div>
            </TopContentItem>
            <TopContentItem
              itemScope
              itemType="http://schema.org/EducationalOrganization"
            >
              <TopContentTitle>¿Dónde estamos?</TopContentTitle>
              <div>
                <span
                  className="small-light"
                  itemProp="address"
                  content="Cra 11B # 99 - 25 Oficina 11-111 - Edificio We Work, Bogotá,
                  Colombia"
                >
                  Cra 11B # 99 - 25 Oficina 11-111 - Edificio We Work, Bogotá,
                  Colombia
                </span>
              </div>
            </TopContentItem>
            <TopContentItem>
              <button onClick={this.toggleMapModal}>
                <img src="/static/images/map.png" alt="Ubicación" />
              </button>
            </TopContentItem>
          </div>
        </TopContent>
        <Separator color="white" width="95%" margin="1.5rem" />
        <BottomContent>
          <div>
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
            <Link href="/convocatoria">
              <a>Convocatoria</a>
            </Link>
            {/* <Link href="/lanzamiento">
              <a>Lanzamiento</a>
            </Link> */}
            <Link href="/apoyados-por">
              <a>Apoyados por</a>
            </Link>
            <Link href="/plan-de-estudios">
              <a>Plan de estudios</a>
            </Link>
            <Link href="/preguntas-frecuentes">
              <a>Preguntas frecuentes</a>
            </Link>
          </div>
          <div>
            <p>
              Copyright © 2018 Codum Academy -{" "}
              <Link href="politica-tratamiento-de-datos-personales">
                <a>Política de tratamiendo de datos</a>
              </Link>
            </p>
            <p>
              Designed by:
              <a href="https://imaginamos.com" target="blank">
                <img src="/static/images/imaginamos.png" alt="imaginamos" />
              </a>
            </p>
          </div>
        </BottomContent>
        <SimpleModal
          toggleModal={this.toggleMapModal}
          isVisible={this.state.isMapModalVisible}
        >
          <MapContainer>
            <iframe
              title="Codumacademy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5008613186346!2d-74.04549929879083!3d4.682660047708916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a96e3478f23%3A0x38c16e0368c9d4c5!2sCra.+11B+%2399-25%2C+Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1538328552553"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            />
          </MapContainer>
        </SimpleModal>
      </FooterContainer>
    );
  }
}

Footer.defaultProps = {
  marginTop: "2rem"
};

Footer.propTypes = {
  marginTop: PropTypes.string
};

export default Footer;
