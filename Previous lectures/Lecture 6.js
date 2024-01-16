// Boolean, String, Integer, Float, Object, Array

// Objects KEY/VALUE pairs

const names = ["Steven", "Andrea", "Scott"]

const user = {
    firstName: "Ådne",
    lastName: "Kristoffersen",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    addMiddleName: function (mname) {
        this.middleName = mname
    },
    age: 32, 
    hobbies: ["coding", "jogging", "tv"],
    address: {
        street: "Solskinnsgaten",
        streetNumber: 12,
        postCode: 4014,
        country: "Norway"
    }
}


user.address.planet = "Earth"

//console.log(user)

const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["coding", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
  {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
    },
  {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
    },
  {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
    },
    {
        name: "Joe",
        age: 18,
        hobbies: ["design", "drawing", "css"],
      }
  ];

  // Console log alle navnene i people arrayet.
  /* for (let peep of people) {
    console.log(peep.hobbies[0])
  } */

  // Make a function that takes in a string as a parameter.
  // The function checks the string against ALL the hobbies
  // of ALL the people in the people array, and return true
  // if there is a match, and false if no match found.
  
/*   const hobbyChecker = (hobby) => {
    for (let person of people) {
        if (person.hobbies.includes(hobby.toLowerCase())) return `Yes! ${person.name} is into ${hobby}`
    }
    return `No one likes ${hobby} 😔`
  }

  console.log(hobbyChecker("Boxing")) */

  // CONTINUE // BREAK
  /* for (let i = 0; i < people.length; i++) {
    if (people[i].name === "Otto") break
    console.log("Hei " + people[i].name)
  } */

  // Lag en loop som genererer følgende setning om hver person:
  // "X is a Y year old man/woman who likes Z among other things"

  for (let person of people) {
    console.log(`${person.name} is a ${person.age} year old ${person.male ? "man" : "woman"} who likes ${person.hobbies[Math.floor(Math.random() * person.hobbies.length)]} among other things.`)

  }

  console.log()



