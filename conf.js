const userCredentials = {
  'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
}

exports.hubURL = "https://hub.browserstack.com/wd/hub"

exports.singleTestCapabilities = {
  'device': 'iPhone 11',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'iPhone',
  'name': 'BStack single node-js', // test name
  'build': 'browserstack-build-1', // CI/CD job or build name
  'browserstack.source': 'node-js:sample-selenium-3-v1.0',
  ...userCredentials
}

exports.localTestCapabilities = {
  'device': 'iPhone 11',
  'realMobile': 'true',
  'os_version': '14.0',
  'browserName': 'iPhone',
  'browserstack.local': 'true',
  'name': 'BStack local node-js', // test name
  'build': 'browserstack-build-1', // CI/CD job or build name
  'browserstack.source': 'node-js:sample-selenium-3-v1.0',
  ...userCredentials
}

exports.parallelTestCapabilities = [
  {
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'Windows',
    'build': 'browserstack-build-1',
    'name': 'BStack parallel node-js 1',
    'browserstack.source': 'node-js:sample-selenium-3-v1.0',
    ...userCredentials
  },
  {
    'os_version': 'Monterey',
    'browserName': 'Chrome',
    'browser_version': 'latest',
    'os': 'OS X',
    'build': 'browserstack-build-1',
    'name': 'BStack parallel node-js 2',
    'browserstack.source': 'node-js:sample-selenium-3-v1.0',
    ...userCredentials
  },
  {
    'os_version': 'Big Sur',
    'browserName': 'Safari',
    'os': 'OS X',
    'build': 'browserstack-build-1',
    'name': 'BStack parallel node-js 3',
    'browserstack.source': 'node-js:sample-selenium-3-v1.0',
    ...userCredentials
  },
  {
    'browserName': 'Android',
    'device': 'Samsung Galaxy S20',
    'realMobile': 'true',
    'build': 'browserstack-build-1',
    'name': 'BStack parallel node-js 4',
    'browserstack.source': 'node-js:sample-selenium-3-v1.0',
    ...userCredentials
  },
  {
    'browserName': 'iPhone',
    'device': 'iPhone 12 Pro Max',
    'realMobile': 'true',
    'build': 'browserstack-build-1',
    'name': 'BStack parallel node-js 5',
    'browserstack.source': 'node-js:sample-selenium-3-v1.0',
    ...userCredentials
  }
];
