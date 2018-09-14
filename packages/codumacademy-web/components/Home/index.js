import React from "react";
import Helmet from "react-helmet";
import dummyData from "../../dummy-data/home";

import Header from "./Header";
import StatsBoxes from "./StatsBoxes";
import Objective from "./Objective";
import Result from "./Result";
import GoalBoxes from "./GoalBoxes";
import Footer from "../Shared/Footer";
import Separator from "../Shared/Separator";
import EmailSuscriptionModal from "../Shared/Modals/EmailSuscriptionModal";
import CheckLogin from "../CheckLogin";

const { header, objective, result, goals } = dummyData;

class Home extends React.Component {
  state = {
    isRegisterModalVisible: false,
    isEmailSuscriptionModalVisible: false
  };
  componentDidMount() {
    setTimeout(this.toggleEmailSuscriptionModal, 3000);
  }
  toggleRegisterModal = () => {
    this.setState({
      isRegisterModalVisible: !this.state.isRegisterModalVisible
    });
  };
  toggleEmailSuscriptionModal = () => {
    this.setState({
      isEmailSuscriptionModalVisible: !this.state.isEmailSuscriptionModalVisible
    });
  };
  render() {
    return (
      <CheckLogin>
        <section className="home with-green-shape">
          <Helmet>
            <title>Inicio</title>
          </Helmet>
          <Header
            isRegisterModalVisible={this.state.isRegisterModalVisible}
            toggleRegisterModal={this.toggleRegisterModal}
            {...header}
          />
          <StatsBoxes />
          <Separator />
          <Objective {...objective} />
          <Separator
            customStyle="
              margin-top: -7px
            "
          />
          <Result {...result} />
          <GoalBoxes title={goals.title} goals={goals.items} />
          <Footer />
          <EmailSuscriptionModal
            isVisible={this.state.isEmailSuscriptionModalVisible}
            onSubmit={() => {}}
            toggleModal={this.toggleEmailSuscriptionModal}
          />
        </section>
      </CheckLogin>
    );
  }
}

export default Home;
