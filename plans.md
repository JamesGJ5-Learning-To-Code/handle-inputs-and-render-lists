# From TOP:

- Two components: App and Overview
- Application (which contains App and Overview) renders an input field and submit button
- A 'tasks array' is managed in state
- Activating the submit button adds the content from the input to a the tasks array
- For each task in the tasks array, an HTML list element should be rendered
- Overview.js should render the tasks as mentioned above
- App.js should handle the input field with the logic

- Tip:
-- Use the map function to map over your tasks array

# DONE Minimum viable product:

App:
- Parent of TaskLogger (input + submit combination) and Overview (where tasks are displayed)
- Contains state of taskArray
- Renders a TaskLogger component as well as an Overview component
- Has a logTask method that changes the state of the taskArray (make sure to bind everything properly)
- Passes logTask to child TaskLogger in props while rendering it (make sure to bind everything properly)
- Passes taskArray to Overview in props while rendering it

TaskLogger:
- Renders a text input
- Renders a button:
-- Generic button
-- Has an onClick event listener that triggers logTask callback from parent App (make sure to bind everything properly)
-- When the above logTask is called, it is called with the value of the input IF the input is not empty, and then the input is cleared--good idea to do this in a method in TaskLogger called handleSubmission

Overview:
- Renders an unordered list:
-- Contains <li> elements that are mapped from the contents of props.taskArray