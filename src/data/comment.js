class Comment {
    constructor(parkName, author, comment) {
        this.parkName = parkName
        this.author = author
        this.comment = comment
    }

    id() {
        return (this.parkName + this.author + this.comment);
    }
}


export { Comment };