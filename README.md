# Back_End_Project

Welcome to the README for my DigitalCrafts Back-End Project: Git2Traveling. This repo has been forked from the official project to allow for continued refactoring without altering the rest of the team's files. In this README I would like to walkthrough the project and highlight my specific contributions.

<img alt="Git2Traveling" title="Home" src="./public/images/Screenshot_Home.jpg">

Git2Traveling was built with (I highly recommend visiting their portfolios to see some of their work as well):

David Vasek - https://github.com/david-vasek
</br>Daniel Agbenu - https://github.com/Dannyagg

Project Overview - 

<img alt="ProjectReqs" title="ProjectReqs" src="./public/images/Screenshot_Project_Requirements.jpg">

</br> Specifically, we were using the MVC (Model, View, Controller) framework to build a Travel Itinerary Planner utilizing Node.js and a PostGres database.

<img alt="PSQL" title="PSQL DB" src="./public/images/Screenshot_ElephantSQL.jpg">

</br>Daniel took the lead on the initial build of SQL data for the schema and the seed. David made an early start on the navigation and template build for the views. So I began with a user-login feature. We used bcrypt.js in node.js to handle the password encryption. 

<img alt="UserModel" title="UserModel" src="./public/images/Screenshot_UserModel_1.jpg">

</br>After the first models were complete I moved onto POST routes for register and login functions.

<img alt="UserRoute" title="User Route" src="./public/images/Screenshot_UserRoute_Post.jpg">

</br>Here's a look at the final product with some bootstrap CSS.

<img alt="RegisterForm" title="User Registration" src="./public/images/Screenshot_RegisterForm.jpg">

<img alt="LoginForm" title="User Login" src="./public/images/Screenshot_LoginForm.jpg">

</br>So now we focused on the main functionality. Using a SQL table to track the trips and a separate SQL table to track the specific itinerary for that trip (thank you, Daniel) I began building models and routes to access and record the data. We built a page to display a User's Trip History (only viewable after the user logs in), which would then redirect to the itinerary for that trip.

<img alt="Schema" title="PSql Schema" src="./public/images/Screenshot_SQL_Schema.jpg">

<img alt="Trip Route" title="Trip Route" src="./public/images/Screenshot_TripRoute.jpg">

<img alt="TripHistory" title="User Trip History" src="./public/images/Screenshot_TripHistory.jpg">

</br>I had the opportunity to write some original functionality in the form of Javascript to compute the number of days in a given trip (taking the dates supplied by a user) in order to break out a daily itinerary.

<img alt="JS Code" title="NumOfDays.JS" src="./public/images/Screenshot_JS_NumOfDays.jpg">

</br>Our deadline came up sooner than expected and but we are continually fine-tuning the application. Although the site isn't live at this time, we all hope to be able to get it up and running soon. Please feel free to reach out with any comments or see my other projects @ https://github.com/naldridge.
