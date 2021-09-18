const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const HelloWorld = artifacts.require("HelloWorld");


module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(SimpleStorage);
};
