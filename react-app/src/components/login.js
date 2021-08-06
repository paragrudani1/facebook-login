import React from "react";
import ReactFacebookLogin from "react-facebook-login";
import { getLongLivedTokenConnect } from "../helpers";

const login = ({ setData }) => {
  return (
    <div>
      <ReactFacebookLogin
        appId={process.env.appId}
        autoLoad={false}
        fields="name,email,picture"
        scope="pages_manage_cta,pages_read_engagement,pages_read_user_content,pages_manage_posts,ads_management,ads_read,leads_retrieval,instagram_basic,instagram_manage_comments,read_insights"
        callback={(res) => {
          console.log(res);
          // Get response
          setData(res);

          getLongLivedTokenConnect({
            token: res.accessToken,
            email: res.email,
          })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.error(err);
            });
        }}
      />
    </div>
  );
};

export default login;
