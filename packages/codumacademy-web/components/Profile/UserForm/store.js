import { compose, withState, withHandlers } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { graphql, withApollo } from "react-apollo";
import updateUserFieldMutation from "./mutations/update-user-field.graphql";
import changePasswordMutation from "./mutations/change-password.graphql";

import getStatesQuery from "../../Shared/Forms/Auth/RegisterForm/queries/states.graphql";
import getCitiesQuery from "../../Shared/Forms/Auth/RegisterForm/queries/cities.graphql";
import {
  setUser,
  setCurrentTab
} from "../../../app-state/actions/user-actions";
import { setPartLoading } from "../../../app-state/actions/app-actions";

import { successMessage, errorMessage } from "../../../utils/msgs";

const defaultCountryId = 47; // Colombia por defecto

const selectSearch = async (queryOpts, dataKey, client, cb) => {
  try {
    const { data } = await client.query(queryOpts);
    if (data && data[dataKey] && data[dataKey].rows) {
      const options = data[dataKey].rows.map(item => ({
        value: item.id,
        label: item.name
      }));

      cb(null, {
        options,
        complete: true
      });
      return;
    }
    cb(null, {
      options: [],
      complete: true
    });
  } catch (e) {
    console.error(e); // eslint-disable-line
  }
};

const getStates = props => async (text = "", cb) => {
  const where = JSON.stringify({
    countryId: defaultCountryId,
    name: {
      $like: `%${text}%`
    }
  });
  const queryOpts = {
    query: getStatesQuery,
    variables: {
      where
    }
  };
  await selectSearch(queryOpts, "states", props.client, cb);
};

const getCities = props => async (text = "", cb) => {
  const where = JSON.stringify({
    stateId: props.currentState.value,
    name: {
      $like: `%${text}%`
    }
  });
  const queryOpts = {
    query: getCitiesQuery,
    variables: {
      where
    }
  };
  await selectSearch(queryOpts, "cities", props.client, cb);
};

const onSelectChange = props => key => async data => {
  if (key === "stateId") props.setCurrentState(data);
  else props.setCurrentCity(data);
  await props.updateField(key, data.value);
};

const handleChange = props => key => e => {
  let func;
  if (key === "fullName") func = props.setFullName;
  if (key === "identityDoc") func = props.setIdentityDoc;
  if (key === "phone") func = props.setPhone;
  if (key === "currentPassword") func = props.setCurrentPassword;
  if (key === "newPassword") func = props.setNewPassword;
  if (key === "birtday") {
    props.updateField(key, e.target.value);
    func = props.setBirtday;
  }
  if (key === "typeIdentityDocId") {
    props.updateField(key, e.target.value);
    func = props.setTypeIdentityDoc;
  }
  if (key === "university") func = props.setUniversity;
  if (key === "career") func = props.setCareer;
  if (key === "semester") {
    props.updateField(key, e.target.value);
    func = props.setSemester;
  }
  if (key === "other") func = props.setOther;

  func(e.target.value);
};

const updateField = props => async (field, value) => {
  props.setPartLoading(true);
  const variables = {
    field,
    value
  };
  const { data } = await props.updateUserField({ variables });
  props.setPartLoading(false);
  if (data && data.updateUserField && data.updateUserField.success) {
    successMessage();
    if (field !== "stateId" && field !== "cityId") {
      const newUser = { ...props.user };
      newUser[field] = value;
      props.setUser(newUser);
    }
    return data;
  }
  errorMessage();
  return null;
};

const onInputReady = props => field => e =>
  props.updateField(field, e.target.value);

const onChangePassword = ({
  currentPassword,
  newPassword,
  updatePassword,
  setNewPassword,
  setCurrentPassword,
  setTab
}) => async () => {
  if (currentPassword.trim().length && newPassword.trim().length) {
    const variables = { currentPassword, newPassword };
    const { data } = await updatePassword({ variables });
    if (data) {
      if (data.changePassword.success) {
        successMessage("Contraseña cambiada!");
        setCurrentPassword("");
        setNewPassword("");
        setTab(1);
        return;
      }
      errorMessage(data.changePassword.message);
      return;
    }
    errorMessage();
  } else
    errorMessage(
      "Error",
      "El password actual y el nuevo password son requeridos!"
    );
};

const funcs = withHandlers({
  getStates,
  getCities,
  handleChange,
  onChangePassword,
  onInputReady,
  onSelectChange
});

const withRedux = () => {
  const mapStateToPros = ({ user, app }) => ({
    user: user.user,
    isLoading: app.isPartLoading
  });

  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        setUser,
        setPartLoading,
        setTab: setCurrentTab
      },
      dispatch
    );

  return connect(mapStateToPros, mapDispatchToProps);
};

const updateFieldMutation = graphql(updateUserFieldMutation, {
  name: "updateUserField"
});

const updatePasswordMutation = graphql(changePasswordMutation, {
  name: "updatePassword"
});

const state = compose(
  withState("currentState", "setCurrentState", props => ({
    value: props.user.state.id,
    label: props.user.state.name
  })),
  withState("currentCity", "setCurrentCity", props => ({
    value: props.user.city.id,
    label: props.user.city.name
  })),
  withState("fullName", "setFullName", props => props.user.fullName),
  withState("university", "setUniversity", props => props.user.university),
  withState("career", "setCareer", props => props.user.career),
  withState("semester", "setSemester", props => props.user.semester),
  withState("other", "setOther", props => props.user.other),

  withState("birtday", "setBirtday", props => {
    const birtday = new Date(props.user.birtday);
    const day =
      birtday.getDate() + 1 < 10
        ? `0${birtday.getDate() + 1}`
        : birtday.getDate() + 1;
    const month =
      birtday.getMonth() + 1 < 10
        ? `0${birtday.getMonth() + 1}`
        : birtday.getMonth() + 1;
    return `${birtday.getFullYear()}-${month}-${day}`;
  }),
  withState(
    "typeIdentityDocId",
    "setTypeIdentityDoc",
    props => props.user.typeIdentityDocId
  ),
  withState("identityDoc", "setIdentityDoc", props => props.user.identityDoc),
  withState("phone", "setPhone", props => props.user.phone),
  withState("currentPassword", "setCurrentPassword", ""),
  withState("newPassword", "setNewPassword", ""),
  withState("isEditing", "toggleEdit", true)
);

const enhance = compose(
  updateFieldMutation,
  updatePasswordMutation,
  withRedux(),
  withApollo,
  state,
  withHandlers({
    updateField
  }),
  funcs
);

export default enhance;
