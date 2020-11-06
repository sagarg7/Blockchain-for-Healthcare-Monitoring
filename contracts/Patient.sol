pragma solidity ^0.5.0;

import "./Hospital.sol";

contract Patient {
    uint public patientCount = 0;

    struct Patient {
        uint id;
        string fname;
        string lname;
        
        uint heartbeat;
        uint CO;
        uint CO2;
        uint body_temp_w;
        uint body_temp_d;
        uint room_temp_w;
        uint room_temp_d;

        uint hospital_id;
        string diagnosis;
    }

    mapping(uint => Patient) public patients;
    constructor() public {
        createPatient('Patient','1',70,10,10,36,5,38,4,1,'');
        createPatient('Patient','2',81,12,8,36,3,37,4,1,'');
    }

    function createPatient(string memory _fname, string memory _lname, uint _heartbeat,uint _CO, uint _CO2, uint _body_temp_w, uint _body_temp_d, uint _room_temp_w, uint _room_temp_d, uint _hospital_id, string memory _diagnosis) public {
        patientCount ++;
        patients[patientCount] = Patient(patientCount,_fname,_lname,_heartbeat,_CO,_CO2,_body_temp_w,_body_temp_d,_room_temp_w,_room_temp_d,_hospital_id, _diagnosis);
    }

    function addDiagnosis(uint pid, string memory _diagnosis) public {
        patients[pid].diagnosis = _diagnosis;
    }

}