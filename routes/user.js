import express from 'express'
import { create, login, logout, heartbeat } from '../controllers/user.js'

const router = express.Router()

router.post('/', create)
router.post('/login', login)
router.delete('/logout', logout)
// 測試有沒有登入中
router.get('/heartbeat', heartbeat)

export default router
