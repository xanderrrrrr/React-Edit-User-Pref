# React-Edit-User-Pref
This is to reactify the ability to edit particular user preferences in WF so you do not have to reset all your user preferences and instead can delete the filter/view/grouping causing the issue..

# The dashboard in question:
[Here](https://xandercanedo.my.workfront.com/dashboard/view?ID=5fa0943103c33dbda24582c6aabd7c9a)

## To Do:
Need to change the API to
- not be hard limited to 5 objects
- ~~not use a hardcoded API and use session~~
- fix the props for the API results (front-end and back-end)
- need to add a delete button for each preference element (JSX)
- need to create API functions in API.js to handle deletion
- need to have the proper props for each preference so that the deletion call can function
- clean up code from template
- deploy somewhere for it to live like heroku

## Possibilities:
Perhaps I use a JSON viewer to render the data to the user (much like the JSON extensions one has on browser): (package here)[https://www.npmjs.com/package/react-json-view]
- Demo (here)[https://mac-s-g.github.io/react-json-view/demo/dist/]
- Easily collapsable
- Still need to solve for how the user selects the ID to remove/blank out

## Original Overview:
1.      user hits an external page (that houses our application) in a dashboard and it passes through a $$USER.ID and a $$SESSION.ID (session ID is like a temporary apiKey that is generated when a user logs in)
2.      the external page/application is listening for when someone requests information from it (and can parse the userID and the sessionID for later use)
3.      The external page/application performs a GET to a pre-defined path requesting all the USERPF objects specific to our $$USER.ID (much like we did in the browser)
4.      The application temporarily stores this information, filters out the email preferences (because we truly only care about lists that have a crappy filter/view/grouping in the application; reports could be edited after a whoops error and we don't care about those)
5.      the application serves up the USERPF objects in a digestible way (TBD)
6.      The user clicks on a delete button for a specific USERPF and basically says "I want this one that says list-people-filterID deleted because it was my list of people and the filter ID that I was messing with"
7.      The application makes a POST call to a predefined path and "blanks" out the list-people-filterID .
8.      The application ends its script and says "Do you want to refresh this page to delete another user preference?" (and if they hit the refresh button on there it refreshes the application again and the whole process kicks off again