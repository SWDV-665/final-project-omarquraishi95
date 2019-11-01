import { Injectable } from '@angular/core';

/*
  Generated class for the IBlog provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IBlogServiceProvider {

//Initial list of items for the App on start up
items=[
  {
    title: "First Blog",
    author: "Omar Quraishi",
    post: "This is a my first post"
  },
  {
    title: "Second Blog",
    author: "Omar Quraishi",
    post: "This is a my second post"
  }
];

  constructor() {
    console.log('Hello IBlogServiceProvider Provider');
  }

  getItems(){
    return this.items;
  }

  removeItem(index){
    this.items.splice(index, 1);
  }

  addItem(item){
    this.items.push(item);
  }

  editItem(item, index){
    this.items[index] = item;
  }

}
