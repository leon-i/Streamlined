# Streamlined
> *Streamlining your streaming needs.*

## Background and Overview  
Ever want to watch a TV Show but you don't know where you can stream it? Streamlined lets you search a TV show by name to see which streaming service can be used to view the show of your choice.
  
## Functionality & MVP  
 * **User Authentication**
   * Users are able to login/logout/signup
 * **Search**
   * Users can search for shows by name to see what websites stream them
 * **User Queue**
   * Logged in users can add shows to their queue
   * The queue will recommend a streaming service based on the shows in the user's queue
   * Calculates amount of money needed to watch all shows in queue
 * **User Reviews**
   * Users can rate shows and provide a review
 * **Recommended Shows**
   * Shows a list of recommended shows when viewing the show page for a TV Show
  
## Technologies and Technical Challenges  
 * **Backend**
    * MongoDB
    * Express
    * NodeJS
    * Entertainment Data Hub API
 * **Frontend**
    * React
    * Redux
   
**Technical Challenges**
Learning how to use the Entertainement Data Hub API to query its database and retrieve information about users' search parameters. Desigining an algorithm to determine shows to recommend to a user based on their recent searches.
  
## Group Members and Work Breakdown
  
**Group Members**
**Isak Leon, Ivan Wang, Andrew Yoo, Joshua Park**
  
* **Day 1**
  * **Ivan/Andrew** - setting up backend skeleton for User and Show Models, basic user auth functionality
  * **Isak/Joshua** - React/Redux frontend skeleton for User Auth, styling for splash/user auth forms
   
* **Day 2**
  * **All** - continue finishing anything from Day 1 that wasn't competed
  * **Isak/Ivan** - configure database queries using EDH API, prepare to implement search
  * **Andrew/Joshua** - integrate User Auth between backend and frontend, begin user queue functionality
  
* **Day 3**
  * **Isak/Andrew** - impliment user queue and search components in React/Redux, styling
  * **Ivan/Joshua** - set up reviews/ratings skeletons, requests in backend
  * **All** - meet to discuss progress, how to proceed on Day 4/5
   
* **Day 4**
  * Implement reviews/ratings in React/Redux
  * Style reviews, ratings, show pages
  * Start building requests for recommended shows in backend, skeleton in frontend
  * Clean up any bugs/styling
  
* **Day 5**
  * Finish recommended shows functionality
  * Style recommended shows component
  * Finish debugging/styling

