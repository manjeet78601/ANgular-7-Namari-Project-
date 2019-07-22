import { Injectable } from '@angular/core';
  import {InMemoryDbService, RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      {id: 11, FirstName: 'Manjeet', LastName: 'Singh', email: 'manjeetpathania09@gmail.com', password: 'welcome'},
      {id: 12, FirstName: 'Sanjeet', LastName: 'Singh', email: 'sanjeetpathania13@gmail.com', password: 'welcome'}
    ];

 const posts: [
  {id: 1, title: 'the first article', author: 'Manjeet',image: 'gallery-image-1.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 2, title: 'the second article', author: 'Manjeet',image: 'gallery-image-2.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 3, title: 'the third article', author: 'Manjeet',image: 'gallery-image-3.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 4, title: 'the fourth article', author: 'Manjeet',image: 'gallery-image-4.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 5, title: 'the fifth article', author: 'Manjeet',image: 'gallery-image-5.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 6, title: 'the Sixth article', author: 'Manjeet',image: 'gallery-image-6.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 7, title: 'the Seventh article', author: 'Manjeet',image: 'gallery-image-1.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 8, title: 'the Eight article', author: 'Manjeet',image: 'gallery-image-3.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 9, title: 'the Ninth article', author: 'Manjeet',image: 'gallery-image-5.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 10, title: 'the Tenth article', author: 'Manjeet',image: 'gallery-image-6.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
  {id: 11, title: 'the eleven article', author: 'Manjeet',image: 'gallery-image-4.jpg', publishdate: '2030-04-23T18:25:43.511Z', excert: 'This is the summary the article.....'},
];

    return {users,posts};

  }
  getToken(user) {
    return 'this is a token';
  }
//posts api declare create a new function//
 getToken(user){
   return 'this is a token ';
 }

 get(reqInfo: RequestInfo) {
if (reqInfo.collectionName === 'posts'){
   return this.getArticles(reqInfo:RequestInfo);
}
return undefined;

 }
 getArticles(reqInfo: RequestInfo) {

 }

  post(reqInfo: RequestInfo) {
 if (reqInfo.id === 'login') {
    console.log('from login');
return reqInfo.utils.createResponse$(() => {
  const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
   const users =  reqInfo.collection.find(user => {
     return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
  });
  let responseBody = {};
  if (users) {
    responseBody = {
      id: users.id,
      FirstName: users.FirstName,
      LastName: users.lLastName,
      email : users.email,
      token: this.getToken(users)
    };
  }
  const options: ResponseOptions = responseBody ?
  {
    body: dataEncapsulation ? { responseBody } : responseBody,
  status: 200
  } :
  {
  body: { error: `'User' with email ='${reqInfo.req['body'].email}' not found`},
   status: 404
  };
  options.statusText = options.status === 200 ? 'ok' : 'Not Found';
  options.headers = reqInfo.headers;
  options.url = reqInfo.url;
  return options;
 });
    }  else if (reqInfo.id === 'signup') {
    reqInfo.id = null;
    console.log('from signup');
  }
}
}
