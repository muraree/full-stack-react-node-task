const securityResult = require('./securityResult')

const Routes = router => {
  securityResult(router)
}

module.exports = Routes
