const customConfig = require("../config");

const DEFAULT_CONFIG = {
  name: "serverless-sharp-image",
  provider: {
    profile: "CH-CH-CH-CHANGEME",
    stage: "dev",
    region: "us-east-1",
  },
  sourceBucket: "glorifiers",
  sourcePrefix: "originals/",
  destinationBucket: "glorifiers",
  destinationPrefix: "web-ready/",
  all: [["rotate"], ["toFormat", "jpeg", { quality: 80 }]],
  outputs: [
    {
      key: "%(filename)s-200x200.jpg",
      params: {
        ACL: "public-read",
      },
      operations: [["resize", 200, 200], ["max"], ["withoutEnlargement"]],
    },
    {
      key: "%(filename)s-100x100.jpg",
      operations: [["resize", 100, 100], ["max"], ["withoutEnlargement"]],
    },
  ],
};

const config = Object.assign(DEFAULT_CONFIG, customConfig);

module.exports = config;
module.exports.serverless = () => config;
