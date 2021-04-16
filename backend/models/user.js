class User {
    constructor(id, email, plan,valid_till, wish_list, continueWatching) {
        this.id = id;
        this.email = email;
        this.plan = plan;
        this.valid_till = valid_till;
        this.wishlist = wish_list;
        this.continueWatching = continueWatching;
    }
}

module.exports = User;