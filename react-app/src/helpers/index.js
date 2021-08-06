import { APi } from "../backend";

// Get facebook Long Lived Token
export const getLongLivedTokenConnect = async (token) => {
  try {
    const res = await fetch(
      `${APi}/facebook/long-lived/get`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(token),
      }
    );
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};
