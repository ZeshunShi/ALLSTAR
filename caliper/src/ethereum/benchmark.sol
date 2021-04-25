pragma solidity >=0.4.22 <0.6.0;

contract benchmark {
    
    mapping(string => int) private accounts;

    function write(string memory acc_id, int value) public {
        accounts[acc_id] = value;
    }

    function read(string memory acc_id) public view returns (int value) {
        value = accounts[acc_id];
    }

}