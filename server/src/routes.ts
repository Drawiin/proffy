import express from 'express'
import ClassesController from './controllers/ClassesController'

const routes = express.Router()
const classController =  new ClassesController()

routes.post('/classes', classController.create)
routes.post('/classes', classController.index)

export default routes