import React from "react";

const Profile = ({ data }) => {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image">
            <img
              src={data.picture.data.url}
              className="rounded"
              width="155px"
              alt="profile"
            />
          </div>
          <div className="mt-1 ml-3 w-100 align-self-baseline">
            <h4 className="mb-2 mt-0">{data.name}</h4>
            <span className="text-muted">{data.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;