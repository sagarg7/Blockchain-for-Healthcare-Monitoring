App = {
        loading: false,
        load: async () => {
            await App.loadWeb3()
            await App.loadAccount()
            await App.loadContracts()
            await App.render()
        },

        loadWeb3: async () => {
            if (typeof web3 !== 'undefined') {
              App.web3Provider = web3.currentProvider
              web3 = new Web3(web3.currentProvider)
            } else {
              window.alert("Please connect to Metamask.")
            }
            if (window.ethereum) {
              window.web3 = new Web3(ethereum)
              try {
                await ethereum.enable()
                web3.eth.sendTransaction({/* ... */})
              } catch (error) {
              }
            }
            else if (window.web3) {
              App.web3Provider = web3.currentProvider
              window.web3 = new Web3(web3.currentProvider)
              web3.eth.sendTransaction({/* ... */})
            }
            else {
              console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
            }
          },

        loadAccount: async () => {
            App.account = web3.eth.accounts[0]
        },
        
        loadContracts: async () => {
            const hospital = await $.getJSON('Hospital.json')
            const patient = await $.getJSON('Patient.json')
            App.contracts.Hospital = TruffleContract(hospital)
            App.contracts.Patient = TruffleContract(patient)              
            App.contracts.Hospital.setProvider(App.web3Provider)
            App.contracts.Patient.setProvider(App.web3Provider)

            App.hospitals = await App.contracts.Hospital.deployed()
            App.patients = await App.contracts.Patient.deployed()
        },

        render: async () => {
            if(App.loading){
                return;
            }

            App.setLoading(true)

            $('#account').html(App.account)

            await App.renderPatients()

            App.setLoading(false)
        },

        renderPatients: async () => {
            const hospitalCount = await App.hospitals.hospitalCount()
            const patientCount = await App.patients.patientCount()

            for(var i = 1; i<=patientCount; i++){
                const patient = await App.patients.patients(i)
                const pid = patient[0].toNumber()
                const fname = patient[1]
                const lname = patient[2]
                const heartbeat = patient[3].toNumber()
                const CO = patient[4].toNumber()
                const CO2 = patient[5].toNumber()
                const body_temp_w = patient[6].toNumber()
                const body_temo_d = patient[7].toNumber()
                const room_temp_w = patient[8].toNumber()
                const room_temp_d = patient[9].toNumber()
                const hid = patient[10]
                const hospital = await App.hospitals.hospitals(hid)
                const hos_name = hospital[1]

                var table_row = '<tr><td>'+pid.toSting()+'</td><td>'+fname+'</td><td>'+lname+'</td><td>'+heartbeat.toString()+'</td><td>'+CO.toString()+'</td><td>'+CO2.toString()+'</td><td>'+body_temp_w.toString()+'.'+body_temo_d.toString()+'</td><td>'+room_temp_w.toString()+'.'+room_temp_d.toString()+'</td><td>'+hos_name+'</td></tr>'
                $('#patientTable').append(table_row)
            }
        },

        setLoading: (boolean) => {
            App.loading = boolean
        }
}

$(() => {
  $(window).load(() => {
    App.load()
  })
})