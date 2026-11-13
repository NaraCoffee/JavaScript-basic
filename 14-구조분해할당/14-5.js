function printUser({name, age, city ='busan'}) {
    console.log(`Name:${name}, Age:${age} City:${city}`);
}

const user = {
    name : 'Alice',
    age : 25,
    //city : 'Seoul'
}

printUser(user)