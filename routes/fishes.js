import { Router } from 'express'
import * as fishesCtrl from '../controllers/fishes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', fishesCtrl.index)

router.post('/', isLoggedIn, fishesCtrl.create)

router.get('/new', fishesCtrl.new)

router.get('/:id', fishesCtrl.show)

router.put('/:id', isLoggedIn, fishesCtrl.update)

router.delete('/:id', isLoggedIn, fishesCtrl.delete)

router.get('/:id/edit', isLoggedIn, fishesCtrl.edit)

router.post('/:id/meals', fishesCtrl.createMeal)


export {
  router
}