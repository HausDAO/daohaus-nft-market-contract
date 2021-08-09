const { expect } = require("chai");

describe("WhitelistedERC20NftSales", function () {
  it("1 should be 1", async function () {
    const WhitelistedERC20NftSales = await ethers.getContractFactory("WhitelistedERC20NftSales");
    const dhNftMarket = await WhitelistedERC20NftSales.deploy();
    await dhNftMarket.deployed();

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    expect(1).to.equal(1);
  });
});
