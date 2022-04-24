import { addNewContact, getContacts, getContactByID, updateContact, deleteContact } from "../controllers/crmController"

const routes = (app) => {
    app.route("/contacts")
        //GET all contacts endpoint
        .get((req, res, next) => {

            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContacts)

        //POST a new contact endpoint
        .post(addNewContact)

    app.route("/contact/:contactID")
        //Updata a specific contact endpoint
        .put(updateContact)

        //Delete a specific contact endpoint
        .delete(deleteContact)

        //GET a specific contact endpoint
        .get(getContactByID)
}


export default routes;

//Middleware functions are functions that have access to the request object (req), the response object (res),
//and the next function in the application’s request-response cycle.
//The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle