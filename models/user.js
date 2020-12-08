import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    account: {
      type: String,
      minlength: [4, '請輸入四個字以上'],
      maxlength: [20, '帳號不可多於二十個字'],
      unique: true,
      required: '帳號必填'
    },
    password: {
      type: String,
      required: [true, '請輸入密碼']
    }
  },
  {
    versionKey: false
  }
)

const users = mongoose.model('users', userSchema)

export default users
