//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;
contract VisitorRecord {

struct Visitor {
address walletAddress;
string name;
string contactDetails;
string purpose;
uint256 timestamp;
}


Visitor[] visitors;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

function registerVisitor(string memory name, string memory contactDetails,string memory purpose) public payable {
require(msg.value > 0, "Please pay greater than 0 ether");
owner.transfer(msg.value);
visitors.push(Visitor(msg.sender, name, contactDetails, purpose, block.timestamp));
}

function getVisitor()public view returns (Visitor[] memory) {
        return visitors;
    }
}