const routes = (app) => {
    app.route("/contacts")
        .get((req, res) =>
            res.send("GET Request Successfully!"))

        .post((req, res) =>
            res.send("POST Request Successfully!"))

    app.route("/contact/:contactID")
        .put((req, res) =>
            res.send("PUT Request Successfully!"))

        .delete((req, res) =>
            res.send("DELETE Request Successfully!"))
}


export default routes;