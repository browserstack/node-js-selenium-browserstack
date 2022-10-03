exports.hubURL = "https://hub.browserstack.com/wd/hub"

const userCredentials = {
  "userName": process.env["BROWSERSTACK_USERNAME"] || "YOUR_USERNAME",
  "accessKey": process.env["BROWSERSTACK_ACCESS_KEY"] || "YOUR_ACCESS_KEY"
}

exports.singleTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Sierra",
    "buildName": "browserstack-build-1",
    "sessionName": "BStack single node-js",
    "local": "false",
    "seleniumVersion": "4.0.0",
    "source": "node-js:sample-master-v1.0",
    ...userCredentials,
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

exports.localTestCapabilities = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Sierra",
    "buildName": "browserstack-build-1",
    "sessionName": "BStack local node-js",
    "local": "true",
    "seleniumVersion": "4.0.0",
    "source": "node-js:sample-master-v1.0",
    ...userCredentials
  },
  "browserName": "Chrome",
  "browserVersion": "latest",
}

const parallelTestBaseCapability = {
  "buildName": "browserstack-build-1",
  "local": "false",
  "seleniumVersion": "4.0.0",
  "source": "node-js:sample-master-v1.0",
  ...userCredentials
};

exports.parallelTestCapabilities = [
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Sierra",
      "sessionName": "BStack parallel node-js 1",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "OS X",
      "osVersion": "Sierra",
      "sessionName": "BStack parallel node-js 2",
      ...parallelTestBaseCapability
    },
    "browserName": "Safari",
    "browserVersion": "latest",
  },
  {
    'bstack:options': {
      "os": "windows",
      "osVersion": "11",
      "sessionName": "BStack parallel node-js 3",
      ...parallelTestBaseCapability
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
  },
];
