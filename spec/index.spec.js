Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')());
const testsContext = require.context('.', true, /\.spec\.[tj]s$/);
testsContext.keys().forEach(testsContext);
