import React from "react";
import { withState } from "recompose";
import PropTypes from "prop-types";
import { ItemList } from "./styles";

const ItemCheckbox = ({
  checked,
  disabled,
  text,
  action,
  help,
  showingHelp,
  toggleHelp
}) => (
  <ItemList checked={checked}>
    <div className="item-content">
      <span className="checkbox">
        {checked && (
          <img
            className="checked"
            src="/static/images/icons/checked.svg"
            alt="Si"
          />
        )}
      </span>
      <span>
        {!action && <div className="text">{text}</div>}
        {action && checked && <div className="text">{text}</div>}
        {action &&
          !checked &&
          !disabled && (
            <button className="text" onClick={action}>
              {text}
            </button>
          )}
        {action &&
          !checked &&
          disabled && <div className="text disabled">{text}</div>}
      </span>
      {help && (
        <button onClick={() => toggleHelp(!showingHelp)}>
          <img className="help" src="/static/images/icons/help.svg" alt="" />
        </button>
      )}
    </div>
    {showingHelp && <div className="help-text">{help}</div>}
  </ItemList>
);

ItemCheckbox.defaultProps = {
  action: null,
  checked: false,
  disabled: false,
  help: null
};

ItemCheckbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  showingHelp: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleHelp: PropTypes.func.isRequired,
  action: PropTypes.any,
  help: PropTypes.any
};

export default withState("showingHelp", "toggleHelp", false)(ItemCheckbox);
