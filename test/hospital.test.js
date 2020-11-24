const hospital = artifacts.require('./Hospital.sol')

contract('hospital',(accounts) =>{
	before(async()=>{
		this.hospital = await hospital.deployed()
	})

	it('Deployed successfully and Hospital node functioning', async() =>{
		const name = await this.hospital.name
		const address =  await this.hospital.address
		assert.notEqual(name,'')
		assert.notEqual(address,null)
		assert.notEqual(address,0x0)
		assert.notEqual(address,'')
		assert.notEqual(address,undefined)
	})

	it('createHospital function test', async() =>{
		const result = await this.hospital.createHospital('new hospital')
		const event = result.logs[0].args
		console.log(result)
		assert.equal(event.id.toNumber(),2)
		assert.equal(event.name,'new hospital')
	})

})