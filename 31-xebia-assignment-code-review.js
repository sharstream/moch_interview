
const addKeys = () => {
  var employee = [{
      id: 123,
      name: 'David'
    },
    {
      id: 456,
      name: 'Mayank'
    }
  ]
  //adding new property name

  const addName = name => {
    return name
  }
  employee.map(currentValue => {
    return currentValue.name === 'David' 
      ? currentValue.displayName = addName('David') 
      : currentValue.displayName = addName('Mayank')
  })

  employee.forEach(element => {
    console.log(`{ \n id: ${element.id}, \n name: ${element.name.toString()}, \n displayName: ${element.displayName.toString()} \n}`);
  })
}

// const addPropertyName = ar => ar.map(property )

addKeys();