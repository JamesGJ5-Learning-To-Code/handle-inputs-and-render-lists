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

# Further plans:

- DONE Ensure the key passed to each <li> when Overview renders is truly unique:
-- Install the uniqid module
-- Import the function 'uniqid' from the uniqid module (this function, when called, simply returns the unique ID)
-- In addTask, instead of simply adding the taskString to the taskArray, add a sub-array containing the taskString and the uniqueID
-- In the mapping in Overview's render function, amend things to the new format

- DONE Manage the value of input in state; for now, this would be in TaskLogger's state, since this value is not needed explicitly by Overview, for example--the value will essentially be saved to the App's taskAndIDArray if it is satisfactory
-- Initialise this state, pendingTaskString, as '' in TaskLogger's constructor
-- Define a TaskLogger method handleChange which takes an event (since it will be a callback) as parameter; each time it is called, newValue will be found from event.target and saved to state.pendingTaskString (via setState)
-- In Overview's render method, put the callback as an onChange in the returned input
-- Might as well initialise the input with a value equal to the initialise state's pendingTaskString value, since this might facilitate persistence later
-- Change handleSubmission accordingly to get value from state now

- DONE Display each task next to a number (from 1 onwards, much like in a basic ordered list) in what Overview renders
-- Manage the number of tasks in-state to enable this
--- Instead of doing the above explicitly, I am going to continue to let the length of taskAndIDArray to do this for me, and use this length to do the numbering, in order to avoid repeating code; so, only changes to the map in Overview need to be made
-- For the sake of practice, don't use an ordered list
-- Remove bullets from default styling

- DONE Permit task deletion