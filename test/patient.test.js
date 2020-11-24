

const patient = artifacts.require('./Patient.sol')

contract('patient',(accounts) =>{
	before(async()=>{
		this.patient = await patient.deployed()
	})

	it('Deployed successfully and Patient node functioning', async() =>{
		const address = await this.patient.address
		assert.notEqual(address,null)
		assert.notEqual(address,0x0)
		assert.notEqual(address,'')
		assert.notEqual(address,undefined)

	})

	it('createPatient function test', async() =>{
		const result = await this.patient.createPatient('Patient','3',70,10,10,36,5,38,4,1,'')
		const event = result.logs[0].args
		console.log(result)
		assert.equal(event.id.toNumber(),3)
	})

	it('addDiagnosis function test ', async() =>{
		const result = await this.patient.addDiagnosis(1,'Anxiety')
		const event = result.logs[0].args
		console.log(result)
		assert.equal(event.pid.toNumber(),1)
		assert.equal(event.diagnosis,'Anxiety')

	})

})