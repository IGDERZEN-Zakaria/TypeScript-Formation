
import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';
 
const OPTIONS : any = {
    headers: {
        'User-agent' : 'request'
    },
    json:true
};

export class GithubApiService
{


    getUserInfo(userName: string , cb: (user: User) => any)
    {


        request.get('https://api.github.com/users/'+ userName , OPTIONS , (error : any, response : any,body : any)=>{
        //console.log(error);
        //console.log(response);
        //console.log(body);
        //let user = new User(JSON.parse(body));
        let user = new User(body);
        //console.log(user);
        cb(user) 
             })
    }
    getRepos(userName: string , cb: (repos : Repo[]) => any)
    {
        request.get('https://api.github.com/users/'+ userName +'/repos', OPTIONS , (error : any, response : any,body : any)=>{
        //let repoArray = body;
        //return repoArray.map((repo : any ) => new Repo(repo))
        let repos =  body.map((repo : any ) => new Repo(repo))
        cb(repos);
})

}
}
