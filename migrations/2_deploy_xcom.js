const NOVA = artifacts.require("NOVA");

module.exports = function(deployer) {
 
  deployer.deploy(NOVA, "NOVA", "NOVA", "6600000000000000000000000");
};
