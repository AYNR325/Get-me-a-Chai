import User from '@/models/User';
import mongoose from 'mongoose';
import Payment from '@/models/Payment';
import connectDb from '@/db/connectDB';
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";


export const authoptions =  NextAuth({

    providers: [
      // OAuth authentication providers...
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    ],

    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider == "github"){
          //connnect to database
          await connectDb();
          // check if user is already exists in database
          const currentUser= await User.findOne({email:email});
          if(!currentUser){
            //create new user
            const newUser = await User.create({
              email: user.email, 
              username: user.email.split("@")[0], 
            })  
          }
          
          return true;
        }
      },

      async session({ session, user, token }) {
        const dbUser = await User.findOne({email: session.user.email})
        session.user.name = dbUser.username
        return session
      },
    }
})

export { authoptions as GET, authoptions as POST}