const casbin = require('casbin')

const enforcerContext = casbin.EnforceContext;

verify = async () => {
    const newEnforcer = await casbin.newEnforcer('./model.conf', './policy.csv');
    if (await newEnforcer.enforce('srikanth','group-write', 'domain1')) {
        console.log('allowed')
    }else {
        console.log('not allowed')
    }
    if (await newEnforcer.enforce('bob', 'group-write', 'group2')) {
        console.log('enforce group')
    }else {
        console.log('sorry bob')
    }
    if (await newEnforcer.enforce('alice','domain-read', 'domain1')) {
        console.log('welcome alice')
    }else {
        console.log('sorry alice')
    }
}
verify();