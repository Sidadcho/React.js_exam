React Firebase Project Documentation:
 Space science

1. Introduction
This documentation provides an overview of a React project that utilizes Firebase for authentication, database, and hosting.
The project focuses on allowing logged-in users to create, update, and delete their projects while providing unauthenticated users the ability to review projects

2. Authentication
Implement Firebase authentication using the `auth` object from the configuration. Provide features like sign-up, login, and logout using Firebase authentication methods.

3. Database
Utilize Firebase Firestore for the database. Organize project data in collections and documents, associating projects with user IDs.

4. Hosting
Deploy the project using Firebase Hosting. Connected my React app to Firebase Hosting using the Firebase CLI.

8. User Actions
   
  Create a Project
  
Authenticated users can create a new project. Utilize Firebase authentication to associate the project with the logged-in user.

  Update a Project
  
Authenticated users can update their own projects.

  Delete a Project
  
Authenticated users can delete their own projects.

  Review Projects
  
Unauthenticated and Authenticated users can review existing projects.
