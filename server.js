const { ApolloServer, gql } = require('apollo-server');  
const typeDefs=`
type Book
 { 
     bookName:String
     author:String
 }
type Query{
    books:[Book]
}
`
const books=[{
    bookName:"One Fine Monday Morning",
    author:"Peter San Joes"
},
 {
    bookName:"Where is my Toast",
    author:"Erric Balducky"
 }
]

const resolvers={
    Query:{
        books:()=>books,
    }
}
const server = new ApolloServer({ typeDefs, resolvers });  
server.listen().then(({ url }) => {  
  console.log(`Server ready at ${url}`);  
});   