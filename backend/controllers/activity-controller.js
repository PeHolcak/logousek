import activityMiddleware from '../middleware/activity-middleware'
import handleRequests from '../helpers/handleRequests'

const addScore = async (req, res) => {
  handleRequests(req, res, 'POST', {}, activityMiddleware.addScore)
}

const getUserScore = async (req, res) => {
  handleRequests(req, res, 'GET', {}, activityMiddleware.getUserScore)
}

const activityController = { addScore, getUserScore }
export default activityController
