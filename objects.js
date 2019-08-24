const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK');
    } else {
        console.log('SHAME');
    }
}

const me = 'Ivan';
console.log(me.length);

bouncer(69);

bouncer(12);

const myObject = {
    name: 'Ivan',
    age: 27    
}


const person = {
    name: 'Ivan',
    status: ''
}

const findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'i') {
        employee.status = 'vip';
    }  else {
        employee.status = 'peasant';        
    }
    console.log(`${employee.name} is such a ${employee.status}`);
    return employee;
}

findAndLogEmployeeStatus(person);