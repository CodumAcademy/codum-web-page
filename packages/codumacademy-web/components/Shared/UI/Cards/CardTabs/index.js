import React from "react";
import PropTypes from "prop-types";

import {
  CardTabsContainer,
  CardLabelsContainer,
  CardLabel,
  CardContent,
  CardItemContent,
  CardItem
} from "./styles";

const CardTabs = props => (
  <CardTabsContainer>
    <CardLabelsContainer>
      {props.tabs.map(item => (
        <CardLabel
          key={item.id}
          isActived={item.id === props.selectedTab}
          onClick={() => props.toggleTab(item.id)}
        >
          {item.label}
        </CardLabel>
      ))}
    </CardLabelsContainer>
    <CardContent>
      {props.tabs.map(item => (
        <CardItem key={item.id} isActived={item.id === props.selectedTab}>
          <CardItemContent>
            <item.component />
          </CardItemContent>
        </CardItem>
      ))}
    </CardContent>
  </CardTabsContainer>
);

CardTabs.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  tabs: PropTypes.array.isRequired,
  toggleTab: PropTypes.func.isRequired
};

export default CardTabs;
