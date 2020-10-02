## Heroku Link:
   Here is hosted link of our application on heroku.
   
   https://hunt2020.herokuapp.com/

# The-Hunt
“The Hunt game” is an outdoor collaborative game which allows the authorized users to play with other team members or to compete with other players in finding the hidden locations in a quest. We are designing this game in view that this is compatible with iPhone SE, Laptop, Tablet, and Android phones. 

A first time user has to register in order to become a player in the game with the Open Authorization. After the user creates an account he can login into the account. The player will have options either to join a team or to create a team. In order to join a team an invitation will be sent to the users via mail. The invitation will be automatic rejection if the user does not respond to it within three days.
A user can create a quest containing number of locations that can be identified by means of latitudes and longitudes. A team containing players will compete to find the locations within specified time period. The team which identifies maximum number of locations within quest gains maximum number of points and will be the winner.

## Technology Stack

Considering requirements provided in RFP, we have put our effort in selecting proper technologies so that it check all our boxes mentioned by client. 

### Backend Language

Coming to backend language, we have decided to use Node.js as it is light-weight and efficient when it comes to real-time applications that should run across distributed devices like:

    •	an iPhone SE
    •	an Android device
    •	a laptop computer
    •	an iPad 

And Node.js offers an Easy Scalability and it is has been regarded as a full-stack JavaScript for serving both the client and the server-side applications.

The ability of Node. js to simultaneously handle multiple requests and provide prompt responses makes it an ideal solution for client-focused web app development. This runtime environment is found more frequently on single-page applications than any other backend technology
    
### Frontend Language

Coming to Front-End, we have thought of using HTML, CSS and JavaScript. We have accessed factors like:

    •	Expertise on Technology.
    •	Available time to deliver.
    •	Security.
    •	Availability Of resources.

Apart from that, JavaScript seemed to be fast, responsive and thought it will be suitable for all platforms such as Android and IOS. Secondly, we are using Heroku application to deploy our application as this is open source and feasible to host. 

BY using  the above technologies there will be a Speedy Development and User-driven Outcomes and  using the Using certain modern frameworks will enable faster development of elements 

And it is very secure and it has a Quickly Reacting Features and Apps

### Framework

Regarding frameworks, as per our client suggestion we thought of using NestJS. This will also help us to organize our code by providing a proper structure.

By using this framework it has Nestbuilding efficient and  scalable Node. js server-side applications because it uses  modern JavaScript, is built with TypeScript

### API's 

For accessing the location we have various API’s like Google Maps and Mapbox. Here in this application we thought of using Google Maps. And for authentication and authorization purpose we are thought of using Open authorization.

## Testing:
  
 Here for testing we are using Cypress. Cypress is purely javascript based front end testing tool.
 
 Using Cypress, developers can create:

Unit tests
Integration tests
End to End tests


## Application Architecture Understanding

![](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/ArchitectureDiagram.png)


## Reminders

1. No spaces in folders and file names.
1. Don't work on stale code - ALWAYS pull first
1. Don't work on your desktop - organize your repos either by class or under a common folder (e.g., github or other). 
1. Deploy as you work - if everything passes tests, we want to add / commit / push and deploy frequently (several times a week).  We should see your app develop throughout the sprint.
1. Do hard things early. Do not delay figuring out the hard questions. 

## Links

[Class Common Repo Link](https://github.com/Krishna-Koyyalamudi/The-Hunt)

[NW Jira Link](http://cs04.nwmissouri.edu/secure/RapidBoard.jspa?rapidView=4&projectKey=GDPGAM&view=planning&selectedIssue=GDPGAM-266&issueLimit=100)

## References

[Build a Rest API with Node.js SQLite and Express JS](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)

[Shared HTML Layouts with Pugjs](https://dev.to/nkratzmeyer/shared-html-layouts-with-pugjs-2j04)

[Custom Elements- Syllabus Examples](https://denisecase.github.io/44-691-gdp1-syllabus/)


## Sketches

![Sign up](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/SignUp_Screen.png) <br>
![Login page](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/LoginScreen%20.png) <br>
![Login page wrong password](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/LoginScreen_WrongPassword.png) <br>
![New password screen](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/New_password.png)

![Create quest](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/create_q.png) <br>

![Create Competition](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Create_Competition.PNG)<br>
![Forgot password](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/ForgotPassword.png)<br>
![Password_reset_code](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Password_reset_Code.png)<br>
![Password hint screen](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/PasswordHint.png)<br>
![Create competition invalid inputs screen](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Two.PNG)<br>
![Location Screen](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Location_Screen.jpeg)
- AS soon as the user login with his credentials:<br>
- Case 1: able to see notification of team invite.<br>
![Team Invite](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/TeamInvite.png)<br>
- case 2: If he is a first time user, then a screen will appear displaying either to create a team or create Quest
![Create Team or Quest](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Hunt.png)
- Case 3: User would like to create a team and send invitation to his friends then the screens would be:<br>
![Team Creation](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/Teamcreation.png)<br>
- As soon as you click on submit button,invite players screen will be appeared.
![send invitation](https://github.com/Krishna-Koyyalamudi/The-Hunt/blob/master/UI/UI_Screens/inviteplayers.png)


 


