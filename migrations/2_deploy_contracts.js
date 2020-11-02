var Healthcare = artifacts.require("./Healthcare.sol");
var Hospital = artifacts.require("./Hospital.sol");
module.exports = function(deployer) {
  deployer.deploy(Healthcare);
  deployer.deploy(Hospital);
};