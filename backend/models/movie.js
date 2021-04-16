class Movie {
    constructor(id, title, description,genre, maturity, slug) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.maturity = maturity;
        this.slug = slug;
    }
}

module.exports = Movie;