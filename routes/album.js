import express from 'express'
import { create, edit, deletee, user, file } from '../controllers/album.js'

const router = express.Router()

// 新增檔案
router.post('/', create)
// 修改檔案
router.patch('/:id', edit)
// 刪除檔案
router.delete('/:id', deletee)
// 取得使用者所有檔案
router.get('/user/:user', user)
// 取得全部檔案
router.get('/file/:file', file)

export default router
