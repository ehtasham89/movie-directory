class commentsController {
    /*
     * comments controller 
    */
    constructor(comments) {
        this.commentsModel = comments;
    }

    //register new movie
    create = (req, res) => {
        res.json({ moviename: "ali", email: "ali@gmail.com" });
    };
}

module.exports = commentsController;
  