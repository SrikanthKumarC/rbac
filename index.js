const casbin = require('casbin')



verify = async () => {
    const newEnforcer = await casbin.newEnforcer('./model.conf', './policy.csv')
    await newEnforcer.addNamedDomainMatchingFunc('g', (...str) => {
        console.log(str)
    })
    await newEnforcer.addNamedDomainMatchingFunc('g1', (...str) => {
        console.log(str)
    })
    if (await newEnforcer.enforce('someone','data2','read','dom2', 'grp1')) {
        console.log('allowed')
    }else {
        console.log('not allowed')
    }
}

verify()