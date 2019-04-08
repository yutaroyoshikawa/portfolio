import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as serviceAccount from './service-account.json'
import { ApolloServer, gql } from 'apollo-server-cloud-functions'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any)
})

const typeDefs = gql`
type Query {
  workses: [Works]
}
type Works {
  name: String!
  thumb: String!
}
`

interface Works {
  name: string
  thumb: string
}

const resolvers = {
  Query: {
    async workses() {
      const workses = await admin
        .firestore()
        .collection('works')
        .get()
      return workses.docs.map(works => works.data()) as Works[]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    headers: req.headers,
    req,
    res,
  }),
  
})

export const apollo = functions.https.onRequest(server.createHandler({
  cors: {
    origin: false
  },
}))
