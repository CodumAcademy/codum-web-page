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
                  Lunes a viernes <br />8:00 AM - 6:00 PM
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
                  content="Carrera 19C # 91-63 Piso 5 Bogotá, Colombia"
                >
                  Ak. 19 # 90-10 - Oficina 501, Bogotá, Colombia
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
            <Link href="/lanzamiento">
              <a>Lanzamiento</a>
            </Link>
            <Link href="/equipo">
              <a>Equipo</a>
            </Link>
            <Link href="/equipo">
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
              title="Imaginamos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.538853778449!2d-74.05802248551738!3d4.67597214317416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aed2fb7934f%3A0xd3d2f7e52b7cfce6!2sImaginamos.com!5e0!3m2!1ses-419!2sco!4v1527523941057"
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
