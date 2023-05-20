export default class Post {
    constructor(title) {
        this.title = title,
        this.date = new Date()
    }
    toStr(str) {
        return str+"";
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }

    get UppercaseTitle() {
        return this.title.toUpperCase();
    }
}