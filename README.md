# Infrastructure

This was set up using Heroku, express, sqllite, and ReactJS. 
First, Heroku was setup with express to deploy the site easily. Then, a database was setup. Since, I didn't want to make the back end too complicated,
I decided to use sqllite instead of Postgress in which it was easy to insert values from CSV files. 

I decided to just have one API call that would return all the data I needed based on the email address provided just to finish it faster. 

Then, the front end was inspired by the colors parcellab has on its site. 

Front End
-> Navigation contains the main screen, order list screen and detailed order. 
First screen:
You have the opportunity to search by email and makes a call to the back end.

Second screen:
This screen shows multiple rows of the orders you've made 

Third screen:
On this screen, you can see a more detailed view of the order such as an image of the articles you've purchased.

# How to run it
```
git clone git@github.com:arrb/parcelLab.git
cd parcelLab
npm install
npm start
-- Open a new terminal window
cd client
npm install 
npm start
```

If you would like to change the CSV file (this is mantaining the header) then to re-run the databases you need to do from root folder
``` 
npm run seed
```
