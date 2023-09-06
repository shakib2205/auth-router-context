/*
Basic Context Api Setup
-----------------------
1.context Api: share auth state with other components (across the application)
2. crate an userContext
3.ContextProvider with passed children
4. set the context User provider in the index.js
5. To consume the context: export the AuthContext from UserContext
6.Now at the header or home () or anywhere else:use context hook to get the info in context.

*/

/*
Auth Integration

1. use getAuth by passing the app from firebase config 
2. create a function named createUser to return createUserWithEmailAndPassword
*/