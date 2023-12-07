# huda
A publicly built UI for data analysis.

# Day 1 
1. Introduction video for the project

# Day 2
1. Introducing the technologies that will be used in the project and presenting them in the video.

# Day 3 

Goal: Develop the basic layout and initialise frontend

1. Setup project directory
2. In project directory initialise the svelte frontend and install dependencies
        npx degit sveltejs/template frontend
        cd frontend && npm install
3. In the src folder create the components directory (This is where we will create our UI components)
        InputBox.svelte, OutputMessage.svelte, DynamicArea.svelte
4. Create basic styling for the components, apply a dark theme, and test the static look

# Day 3.5

1. Revised the code a bit. Added some comments, updated formatting so it's not ugly.

# Day 4

1. Create backend directory
2. In the backend directory initialise a Node.js project and install dependencies
        npm init -y
        npm install express
3. Create server.js and setup basic server
4. Create an index.html file to apply styling to the backend with a dummy output
5. Update server.js so that it properly applies index.html styling on the backend

# Day 5

1. Modify InputBox.svelte so it listens for enter and clears the InputBox. 
2. Created ApiService.js with an async function to make POST requests to the backend. Import and call this function from InputBox.svelte on enter.
3. Modified OutputMessage.svelte so it waits for MessageReceived event from App.svelte and displays the message.
4. Created messageController.js with functions to emit MessageReceived events with the message payload. Import and call messageController from InputBox and ApiService.
5. Created messageRoutes.js with POST route to call messageController function on request. Import and use in server.js.
6. Created processingService.js with dummy function to simulate processing. Import and call from messageController.
7. Achieved communication between frontend and backend by converting the message to uppercase.