pragma solidity ^0.5.0;

contract Hospital {
    uint public hospitalCount = 0;

    struct Hospital {
        uint id;
        string name;
    }
    event hospital_node_added(
        uint id,
        string name
    );
    mapping(uint => Hospital) public hospitals;

    constructor() public {
        createHospital("Demo Hospital");
    }

    function createHospital(string memory _name) public {
        hospitalCount ++;
        hospitals[hospitalCount] = Hospital(hospitalCount,_name);
        emit hospital_node_added(hospitalCount,_name);

    }
    
}