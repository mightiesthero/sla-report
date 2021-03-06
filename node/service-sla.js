require('dotenv').config();

const server = process.env.SERVER;
const port = process.env.PORT;

const generateServiceTimeline = require('./helpers/generateServiceTimeline');

const {
  hostName,
  serviceName,
  from,
  until,
} = require('./helpers/checkmkHelper/setting');

const main = async () => {
  try {
    const serviceData = await generateServiceTimeline(
      server,
      port,
      hostName,
      serviceName,
      from,
      until
    );

    console.log('hostDataDown', serviceData.timelines.UNKNOWN);
    // console.log('timeline', serviceData.timelines['H.Down']);
    // console.log('timeline', serviceData.timelines.summary);
    console.log('availability', serviceData.availabilty);

    console.log('host', hostName);
    console.log('service', serviceName);
    console.log('from', from);
    console.log('until', until);
  } catch (error) {
    console.log(error);
  }
};

main();
