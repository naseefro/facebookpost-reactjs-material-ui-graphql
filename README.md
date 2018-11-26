# facebookpost-reactjs-material-ui-graphql
its sample reactjs code for facebook post using nodejs,mongodb,graphql 


<p align="center">
  <img width="150" src="./src/assets/images/sexy-portfolio-logo.png">
  <br/>
</p>

  </p>
  <h1 align="center">facebook post/h1>

This sample is made with [React](https://github.com/facebook/react), [Material UI](https://github.com/callemall/material-ui) and a lot of efforts. feel free to fork and have fun with it.




<h3>Server</h3>
1. cd server
2. npm install ----> To install node_modules
3. node server.js ------> to run
4. Visit [localhost:4000](http://localhost:4000).

it will  show <h4>Graphql</h4> 

type this  to create a post in localhost:4000

mutation{
  createPost(username:"Mark Zuckerberg",imageurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg",posts:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like")
  {
		id
 		username
		imageurl
    posts
    
  }
}

then 

<h3>Client</h3>
1. cd client
2. npm install ----> install node_modules
3. npm start  ----> to run 
4. Visit [localhost:3000](http://localhost:3000).

