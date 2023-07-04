import type {NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions ={
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username:{
                    label: 'Username',
                    type: 'text',
                    placeholder: 'Username'
                },
                password:{
                    label: 'Password',
                    type: 'password',
                    placeholder: '*******',
                }
            },
            async authorize(credentials){
               //TO DO retrieve userdata from database to verify
               const user = {
                id:'1', 
                name: 'immer',
                password: 'test',
               } 
               if(credentials?.username === user.name &&credentials?.password === user.password ){
                return user
               } else{
                return null
               }

            }
        }) 
    ],
    pages:{
        signIn: '/auth/login'
    }
    //TODO ------>session
}

