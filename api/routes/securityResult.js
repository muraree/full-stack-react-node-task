const securityController = require('../controller/securityController')

const securityResult = router => {
  router.post('/api/security', securityController.createScanResult)
  router.get('/api/security', securityController.getScanResult)
  router.delete('/api/security', securityController.deleteScanResult)
}

module.exports = securityResult
