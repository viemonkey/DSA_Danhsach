"use strict";
exports.__esModule = true;
var LinkedList_1 = require("../model/LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(30);
linkedList.insertLastNode(40);
console.log(linkedList.getSize());
console.log(linkedList.readList());
