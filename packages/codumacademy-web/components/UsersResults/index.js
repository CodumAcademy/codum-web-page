import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import TopNavigation from "../Shared/TopNavigation";
import Footer from "../Shared/Footer";
import InPartLoading from "../Shared/UI/Loaders/InPartLoading";
import GenericButton from "../Shared/UI/Buttons/GenericButton";
import UserList from "./UserList";
import WithAuth from "../WithAuth";

import withStore from "./store";

import {
  Container,
  Title,
  ListRequirements,
  DownloadIconContainer,
  DownloadImage
} from "./styles";

const UsersResults = props => (
  <WithAuth admin>
    <section className="launch with-green-shape">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-table@latest/react-table.css"
        />
        <title>Usuarios</title>
      </Helmet>
      <TopNavigation />
      <Container>
        <Title>Usuarios</Title>
        <DownloadIconContainer>
          <DownloadImage
            src="/static/images/icons/file.svg"
            alt="download"
            onClick={() => props.setShowList(!props.showList)}
          />
        </DownloadIconContainer>
        {props.showList && (
          <ListRequirements>
            {props.downloading && <InPartLoading />}

            {props.currentConvocation.convocationRequirements.map(item => (
              <li key={item.id}>
                <label htmlFor={`item-${item.id}`}>{/* eslint-disable-line */}
                  <input
                    type="checkbox"
                    onClick={props.onCheckRequirement(item)}
                    id={`item-${item.id}`}
                  />
                  <span>{item.description}</span>
                </label>
              </li>
            ))}
            <GenericButton action={props.downloadExcel} width="60px">
              Descargar
            </GenericButton>
          </ListRequirements>
        )}
        <UserList users={props.users} />
      </Container>
      <Footer marginTop="20%" />
    </section>
  </WithAuth>
);

UsersResults.propTypes = {
  users: PropTypes.array.isRequired,
  answersSheets: PropTypes.array.isRequired,
  downloading: PropTypes.bool.isRequired,
  showList: PropTypes.bool.isRequired,
  currentConvocation: PropTypes.object.isRequired,
  setShowList: PropTypes.func.isRequired,
  downloadExcel: PropTypes.func.isRequired,
  onCheckRequirement: PropTypes.func.isRequired
};

export default withStore(UsersResults);
