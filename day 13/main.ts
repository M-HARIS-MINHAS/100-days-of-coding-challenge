//question no 37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function Shirt(size:string="large",message:string=  "l do coding"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`)
  }
  Shirt()
  Shirt("medium")
  Shirt("small","coding is my hobby")
  
  
  
  
  
  //question no 38:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
  function describe_city(city:string ,country:string = "pakistan"){
    console.log(`${city} is in ${country}`)
  }
  describe_city("karachu")
  describe_city("hyderbad")
  describe_city("mumbai","india")
  
  
  
  
  
  
  //question no 39 :City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
  
  //"Lahore, Pakistan"
  
  //Call your function with at least three city-country pairs, and print the value that’s returned.
  function city_country(city:string,country:string): string {
    return `${city}, ${country}`;}
   let a= city_country("Lahore", "Pakistan")
   let b= city_country("madina","saduia arab")
   let c= city_country("mumbai","india")
  console.log(a)
  console.log(b)
  console.log(c)
  
  
  
  