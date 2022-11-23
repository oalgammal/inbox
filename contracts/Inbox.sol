// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Inbox {
    string public  message;
   
    constructor (string memory intialMessage) public{
        message = intialMessage;
    }
    function setMessage(string memory newMessage)public{
        message = newMessage;
    }
  
}