pragma solidity ^0.5.0;

contract Healthcare {
    uint public hospitalCount = 0;
    uint public patientCount = 0;

    struct Hospital {
        uint id;
        string name;
    }

    struct Patient {
        uint id;
        string fname;
        string lname;
        
    }
}