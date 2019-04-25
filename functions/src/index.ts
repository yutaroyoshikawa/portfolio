import * as functions from 'firebase-functions'
// import mailer from './mail'
import server from './apollo'
import webhook from './slack'

export const apollo = functions.https.onRequest(server)

// export const mail = functions.https.onRequest((req, res) => {
//   mailer(
//     req.body.token,
//     {
//       to: functions.config().mail.address,
//       subject: `${req.body.title}[${req.body.email}]`,
//       text: req.body.content,
//     },
//     res
//   )
// })

export const slack = functions.firestore.document('contacts/{contactID}').onCreate(snapshot => {
  const data = snapshot.data()
  if(data) {
    webhook(data.title, data.email, data.content)
  }
})
