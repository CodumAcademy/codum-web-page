import styled from "styled-components";

const ProfileContainer = styled.section`
  .content {
    display: flex;
    .profile-name {
      text-align: center;
      margin-top: 5rem;
      width: 30%;
      img {
        max-width: 80%;
      }
    }
    .tabs-content {
      width: 65%;
    }
  }
  .fullName {
    text-align: center;
    margin-top: 1rem;
    font-size: 1.8rem;
    color: var(--text-color);
    font-weight: bold;
  }
`;

export default ProfileContainer;
