// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  //Return the list of inventors who are born in 1500's
  const fifteenHundredInventors = inventors.filter(person =>
   ((person.year/100) | 0) === 15 );
   console.table(fifteenHundredInventors);

   //Return inventors first and last name
   const fullNames = inventors.map(person=> person.first+" "+person.last);
   console.log(fullNames);

   //Sort the inventors by birthday from oldest to youngest
   const orderedInventors = inventors.sort((a,b)=>
        a.year-b.year
   );
   console.table(orderedInventors);

   //How many years did all the inventors live?
   const totalAge = inventors.reduce((total,inventor)=> {
       return total+inventor.passed-inventor.year
   },0);
   console.log(totalAge);

   //Sort the inventors by their lifespan
   const orderedLifeSpans = inventors.sort((a,b)=>{
       let firstLifeSpan = a.passed-a.year;
       let secondLifeSpan = b.passed-b.year;
       return secondLifeSpan - firstLifeSpan

   });
   console.table(orderedLifeSpans);

   //Create a list of Boulevards in Paris that contain 'de' anywhere in the name
   // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    let links = document.querySelectorAll('.mw-category a');
    links = Array.from(links);  //Converts the NodeList to array. Can also include spread operator.
    
    links.map(
        (name)=> name.textContent
        ).filter(
            name=> name.includes('de')
            );

    //Sort people alphabetically by last name
    const sortedPeople = people.sort((a,b)=>{
        const [aLast,aFirst] = a.split(', ');
        const [bLast,bFirst] = b.split(', ');
        return bLast>aLast?-1:1;
        
     } );
     console.table(sortedPeople);

    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const tally = data.reduce(function(obj,item){
        if(!obj[item]){
            obj[item]=1;
        }
        else obj[item]++;
        return obj;
    },{});
    
    console.log(tally);


