const { default: axios } = require("axios");

exports.getLongLivedToken = async (req, res, next) => {
  try {
    const longLivedToken = await axios.get(
      `https://graph.facebook.com/v8.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&fb_exchange_token=${req.body.token}`
    );

    req.longLivedToken = longLivedToken.data.access_token;

    next();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getFBUserId = async (req, res, next) => {
  try {
    const FBUserId = await axios.get(
      `https://graph.facebook.com/v8.0/me?access_token=${req.longLivedToken}`
    );

    // facebook userId
    req.FBUserId = FBUserId.data.id;

    next();
  } catch (err) {
    res.status(500).json({
      message: "Something Went Wrong!",
      err: err.message,
    });
  }
};

// get facebook pages access token
exports.getPageAccessToken = async (req, res, next) => {
  try {
    let pagesData = [];

    const data = await axios.get(
      `https://graph.facebook.com/v8.0/${req.FBUserId}/accounts?access_token=${req.longLivedToken}`
    );

    // page data in array

    const pages = data.data.data;

    if (pages.length > 0) {
      for (const page of pages) {
        // Page Image
        const pageImage = await axios.get(
          `https://graph.facebook.com/v8.0/${page.id}/picture?redirect=false&width=200&access_token=${page.access_token}`
        );

        pagesData.push({
          access_token: page.access_token,
          page_id: page.id,
          fbId: req.FBUserId,
          url: pageImage.data.data.url,
          name: page.name,
        });
      }

      return res.json({ message: "success", data: pagesData });
    } else {
      return res.status(400).json({
        error:
          "No Page Selected! You must have to select atleast one facebook page",
      });
    }
  } catch (err) {
    return res.status(501).json({
      error: "sorry! Couldn't update your facebook page!",
      err: err.message,
    });
  }
};
