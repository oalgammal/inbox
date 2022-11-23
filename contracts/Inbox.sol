// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Inbox {
    string public  message;
   
  
    function setMessage(string memory newMessage)public{
        message = newMessage;
    }
  
}