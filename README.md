This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
website is deployed over heroku -- https://tiny-word-counter.herokuapp.com/


Clone the repository

    git clone https://github.com/vishalsh2299/Word-Counter.git
Move into the directory

    cd client
To start the server type the below commands

    npm run start-server
Local server will be running at localhost:5000 Hosted server running at https://tiny-word-counter.herokuapp.com/

To start the frontend type the below commands. Runs at localhost:3000

    ng serve

In the project directory, you can run and create the build folder(for deployment):

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:5000) to view it in the browser.



# Componenets of the code

To install all the dependencies run `npm install`
## Libraries used are
1. React material ( for loader )
2. React ( front end )
3. Axios ( to get and post data using the API )
4. Body parser ( to parse JSON data )
5. Request ( to fetch data from the given API )
6. Express ( for handling requests )
7. Nodemon ( Easy reloading only for development )

### Backend
Goto: server -> index.js
Get the POST request from the frontend form value. Then fetching the data from the API and mapping each word with its count
and then sorting and storing it in an array. Then sending the top n (value that we got from the form) words with their count.

### Frontend
Goto: src
index.js is the main file that renders the components and here we fetch the API data and pass it to FetchWords component
FetchWords it renders the props data that is sent and shows all the words with their respective frequency
CountWord: it gets the input value and pass to the api using axios on submitting.

## Screenshots 

#Rendering the top N words

![Screenshot (207)](https://user-images.githubusercontent.com/49973377/89319602-f8c39c00-d69d-11ea-897e-08e63cc5d4d2.png)

#Loading Words

![Screenshot (208)](https://user-images.githubusercontent.com/49973377/89320097-a9ca3680-d69e-11ea-9564-11b4ca3f0092.png)
