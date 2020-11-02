var Healthcare = artifacts.require("./Healthcare.sol");
var Hospital = artifacts.require("./Hospital.sol");
var Patient = artifacts.require("./Patient.sol");
module.exports = function(deployer) {
  deployer.deploy(Healthcare);
  deployer.deploy(Hospital);
  deployer.deploy(Patient);
};