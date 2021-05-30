"use strict";
exports.__esModule = true;
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
//svc.getUserInfo('koushikkothagal');
svc.getUserInfo('koushikkothagal', function (user) {
    console.log(user);
});
svc.getRepos('koushikkothagal', function (repos) {
    console.log(repos);
});
//console.log("Hii !!!")
