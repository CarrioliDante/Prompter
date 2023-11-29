import mongoose from 'mongoose'

let isConnected = false //ver el status de conexion

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  if (isConnected) {
    console.log('Conectado a  MongoDB')
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('MongoDB conectado')
  } catch (error) {
    console.log(error)
  }
}
