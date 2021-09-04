import React from 'react';

const Profile = props => {
  console.log(props.match.params.id);

  return <div>Profile</div>;
};

export default Profile;
