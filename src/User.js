"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(userResponse) {
        //this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.repos = userResponse.repos;
    }
    return User;
}());
exports.User = User;
