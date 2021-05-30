import { GithubApiService } from "./GithubApiService";
import * as _ from "lodash";
import { User } from "./User";
import { Repo } from "./Repo";

let svc = new GithubApiService();
if (process.argv.length < 3) {
  console.log("Please pass the username as an argument");
} 
else {
  //console.log(process.argv);
  //svc.getUserInfo('koushikkothagal');
  let username = process.argv[2];
  //svc.getUserInfo("koushikkothagal", (user: User) => {
  //  svc.getRepos("koushikkothagal", (repos: Repo[]) => {
  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
      let sortedrepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
      let filteredrepos = _.take(sortedrepos, 5);
      user.repos = filteredrepos;

      console.log(user);
    });
  });
}
//console.log("Hii !!!")
