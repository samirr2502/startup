# MeetingPlanner
CS 260 Fall 2024 project 
This Web Application has the main purpose of creating an online hub for leaders on an LDS Ward to make changes to a sacrament meeting meeting, and for members to view the details on those meeting agenda.
***Change***
This application will now focus on Checking Members in and out.
The meeting planning funcitonality will be potentially added in the future

## Specification Deliverable
### Elevator's Pitch

As a counselor to a ward and also a member I have been always intrigued by why an agenda isn't provided, and if it is, is for special Sundays or baptisms, and it's also in paper, and just creating the meeting can be a tedious process, let alone having to figure out where to print it, how, the money to spend, ETC. No worries, MeetingPlanner is the soluction. It's the only tool that helps wards leaders schedule their meetings, add leaders to plan those meetings together LIVE! and a members view for everyone at the meeting to know what's happening next (Or even what hymn to sing). 
***Change***
This application will now focus on Checking Members in and out.
The meeting planning funcitonality will be potentially added in the future

### Design
![image](https://github.com/user-attachments/assets/538b32a9-6277-4592-89c8-f3ea209f588b)
![image](https://github.com/user-attachments/assets/c30760c9-8cb8-42bd-b813-54e1dd55aee5)

### Key Features

1.) Leaders Plan Meetings together

2.) a.Members view and comment on Meetings
    b.Members (Participants) request to participate next meeting
    
3.) Leaders and Admin Manage members(users) and meetings

***Change***
1.) Laaders add and check in members and they can see what other users are doing

### Technologies 

**HTML** - Uses correct HTML structure for application. Around 7 HTML Pages. Log in/Create user/ New user landing (waiting for approval)/ User home/ Meetings (View) / Meetings Planner/ Management

***Delivered:***
    7 HTML pages:  Log in/Create user/ New user landing (waiting for approval)/ User home/ Meetings (View) / Meetings Planner/ Management
    Can switch properly between pages.
    All elements are well organized into divs

**CSS** - Web Responsive.. Specially nice on Phones. Colors: Use Color Palette website to pick a nice one with good contrasts. A lot of grid-layout usage

***Delivered:*** 
    Used Bootstrap color palette, buttons, image carousel, form inputs, tables and more to create a nice layout. 
    Used css file to provide other nice layout for the header nav bar, and major columns on pages.

**JavaScript** - Use it to give some, but not much interaction. Log ins, dropdown menus, Loading snippets.

***Delivered:***

Log in interaction and show error messages.

**React** - Specially for memmbers management and meeting planner. This will allow me to create an interactive web application


***Delivered:***

Created React App. Added members and users fucntionality as well as validating users. Also gave template for what the session log will look like after adding the services and websockets

**Service** - Backend service with endpoints for: 
Log in.
Editing meeting.
(Possibly an Import API to add a bunch of users at the same time)
***Changes***
Changed to members check in instead of meetings planner
Log in and adding and checking members in and out

**DB/Login** - Store users, choices, and votes in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated. 
***Changes***
Changed to members check in instead of meetings planner
Log in and adding and checking members in and out through data base

**WebSocket** - When someone's changing a meeting, every leader in the page can see what they have changed and add their own changes.
***Changes***
When someone is adding or updating a member, the websocket will send notificaitons to everyone abiut the update (It will update on the user that sent it as well) 


### Delivered:

**HTML**
***Delivered:***
    7 HTML pages:  Log in/Create user/ New user landing (waiting for approval)/ User home/ Meetings (View) / Meetings Planner/ Management
    Can switch properly between pages.
    All elements are well organized into divs
***Changed:***
Instead of a meetings planner, the website is going to focus on checking in. Updating to react made me update most of the structure of the website
Many things are the same but now the pages are: 
Log in/Home 
Check ins
About
With multiple Reac components
**CSS** 
***Delivered:*** 
    Used Bootstrap color paltte, buttons, image carousel, form inputs, tables and more to create a nice layout. 
    Used css file to provide other nice layout for the header nav bar, and major columns on pages.
    
***Changes***
    Added the necessary changes to the react components and created more css files specific to each section

**JavaScript**
***Delivered:***
Log in interaction and show error messages.

**React** 

***Delivered:***

Created React App. Added members and users fucntionality as well as validating users. Also gave template for what the session log will look like after adding the services and websockets

**Service** -

***Delivered***
Backend service with endpoints for: 
Log in.
Saving members info
API: https://techy-api.vercel.app/api/json


**DB Login**

***Delivered***

- Connected to Mongo DB with:
     - db: startup
     - collection1: user
     - collection2: member
 - Saving token in cookies for authentication
 - Saves login info
 - Saves members and updates database when member is checked in and out



**Websocket**

***Delivered***

Users can add members and update tham and will see a log of the members they have added or edited as well as the other users updates.
