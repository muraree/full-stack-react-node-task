const SecurityScan = require('../model/securityScan')

const securityController = {
  createScanResult: async (req, res) => {
    const resp = {
      message: '',
      error: ''
    }
    try {
      const scan = req.body
      const securityScan = new SecurityScan({ ...scan })
      await securityScan.save()
      resp.message = 'Scan created successfully'
      res.status(200).json(resp)
    } catch (error) {
      console.log('Internal Server Error...', error)
      resp.message = 'Internal Server Error...'
      resp.error = error
      res.status(500).json(resp)
    }
  },
  getScanResult: async (req, res) => {
    const resp = {
      message: '',
      error: '',
      data: []
    }
    try {
      const scans = await SecurityScan.find({})
      resp.message = 'Scans fetched successfully'
      resp.data = scans
      res.status(200).json(resp)
    } catch (error) {
      console.log('Internal Server Error...', error)
      resp.message = 'Internal Server Error...'
      resp.error = error
      res.status(500).json(resp)
    }
  },
  deleteScanResult: async (req, res) => {
    const resp = {
      message: '',
      error: '',
    }
    try {
      console.log(req.query)
      await SecurityScan.findOneAndDelete({_id: req.query.id})
      const scans = await SecurityScan.find({})
      resp.message = 'Scan deleted successfully'
      resp.data = scans
      res.status(200).json(resp)
    } catch (error) {
      console.log('Internal Server Error...', error)
      resp.message = 'Internal Server Error...'
      resp.error = error
      res.status(500).json(resp)
    }
  }
}

module.exports = securityController
