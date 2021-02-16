import mongoose from 'mongoose'

const Schema = mongoose.Schema

const albumSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, '缺少使用者欄位']
    },
    description: {
      type: String,
      maxlength: [200, '說明必須 200 字以下']
    },
    file: {
      type: String,
      required: [true, '缺少檔案名稱']
    }
  },
  {
    versionKey: false
  }
)

const album = mongoose.model('album', albumSchema)

export default album
