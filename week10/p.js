var george = {
    'name': 'George',
    'age': 25,
    'friends': [
       { 'name': 'John', 'age': 22 },
       { 'name': 'Mary', 'age': 28 }
    ]
  }
  console.log(george.age)
  var friend=george.friends
  for(var i in friend)
  {
      console.log(friend[i].name+" is "+friend[i].age+" years old.")
  }

  