# MeetingPlanner
CS 260 Fall 2024 project 
This Web Application has the main purpose of creating an online hub for leaders on an LDS Ward to make changes to a sacrament meeting meeting, and for members to view the details on those meeting agenda.

## Specification Deliverable
### Elevator's Pitch

As a counselor to a ward and also a member I have been always intrigued by why an agenda isn't provided, and if it is, is for special Sundays or baptisms, and it's also in paper, and just creating the meeting can be a tedious process, let alone having to figure out where to print it, how, the money to spend, ETC. No worries, MeetingPlanner is the soluction. It's the only tool that helps wards leaders schedule their meetings, add leaders to plan those meetings together LIVE! and a members view for everyone at the meeting to know what's happening next (Or even what hymn to sing). 

### Design
![image](https://github.com/user-attachments/assets/538b32a9-6277-4592-89c8-f3ea209f588b)
![image](https://github.com/user-attachments/assets/c30760c9-8cb8-42bd-b813-54e1dd55aee5)

### Key Features
1.) Leaders Plan Meetings together

2.) a.Members view and comment on Meetings
    b.Members (Participants) request to participate next meeting
    
3.) Leaders and Admin Manage members(users) and meetings


### Technologies 

**HTML** - Uses correct HTML structure for application. Around 8 HTML Pages. Log in/Create user/ New user landing (waiting for approval)/ User home/ Meetings (View) / Meetings Planner/ Members (Users) View/Management/ Ward Management

**CSS** - Web Responsive.. Specially nice on Phones. Colors: Use Color Palette website to pick a nice one with good contrasts. A lot of grid-layout usage

**JavaScript** - Use it to give some, but not much interaction. Log ins, dropdown menus, Loading snippets.

**React** - Specially for memmbers management and meeting planner. This will allow me to create an interactive web application

**Service** - Backend service with endpoints for: 
Log in.
Editing meeting.
(Possibly an Import API to add a bunch of users at the same time)

**DB/Login** - Store users, choices, and votes in database. Register and login users. Credentials securely stored in database. Can't vote unless authenticated.

**WebSocket** - When someone's changing a meeting, every leader in the page can see what they have changed and add their own changes.
