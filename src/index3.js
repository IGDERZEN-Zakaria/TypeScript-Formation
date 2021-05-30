"use strict";
exports.__esModule = true;
var GithubApiService_1 = require("./GithubApiService");
var _ = require("lodash");
var svc = new GithubApiService_1.GithubApiService();
if (process.argv.length < 3) {
    console.log('Please pass the username as an argument');
}
else {
    //console.log(process.argv);
    //svc.getUserInfo('koushikkothagal');
    var username_1 = process.argv[2];
    //svc.getUserInfo("koushikkothagal", (user: User) => {
    //  svc.getRepos("koushikkothagal", (repos: Repo[]) => {
    svc.getUserInfo(username_1, function (user) {
        svc.getRepos(username_1, function (repos) {
            var sortedrepos = _.sortBy(repos, [function (repo) { return repo.forkCount * -1; }]);
            var filteredrepos = _.take(sortedrepos, 5);
            user.repos = filteredrepos;
            console.log(user);
        });
    });
}
//console.log("Hii !!!")
