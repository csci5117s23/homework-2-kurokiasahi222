/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
* link to the code: https://github.com/csci5117s23/Tech-Stack-2-Kluver-Demo/blob/main/backend/index.js
*/

import { app } from 'codehooks-js'
import { crudlify } from 'codehooks-crudlify'
import { date, object, string, boolean } from 'yup'
import jwtDecode from 'jwt-decode'

const toDoListYup = object({
  user_Id: string().required(),
  content: string().required(),
  done: boolean().default(false),
  createdOn: date().default(() => new Date()),
})

const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  }
}

// app.use((req, res, next) => {
//   if (req.method === "POST") {
//     // always save authenticating user Id token.
//     // note -- were not enforcing uniqueness which isn't great.
//     // we don't currently have a great way to do this -- one option would be to 
//     // have a user collection track which collections have been filled
//     // It's a limitation for sure, but I'll just make that a front-end problem...
//     req.body.userId = req.user_token.sub
//   } else if (req.method === "GET") {
//     // on "index" -- always check for authentication.
//     req.query.userId = req.user_token.sub
//   }
//   next();
// })

app.use(userAuth)
// Use Crudlify to create a REST API for any collection
crudlify(app, { todos: toDoListYup })

// bind to serverless runtime
export default app.init();
