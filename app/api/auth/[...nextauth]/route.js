import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from '@utils/database'
import User from '@models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    })
    session.user.id = sessionUser._id.toString()
    return session
  },
  async signIn({ profile }) {
    try {
      //Serverless -> lambda ->Cada vez que es llamada
      await connectToDB()
      //Debemos crear un modal
      //Chequear que el usuario exista
      const userExist = await User.findOne({ email: profile.email })

      //Chequear si no existe crear usuario y guardarlo en DB
      if (!userExist) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture,
        })
      }
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
})

export { handler as GET, handler as POST }
