orderedList = document.querySelector(".o_list");


function createList(){


    var numbers = [];

    while(numbers.length < 10)
    {
        var r = Math.floor(Math.random() * 100) + 1;
        if(numbers.indexOf(r) === -1) numbers.push(r);
    }

    const myList = document.createElement("li");

    myList.appendChild(document.createTextNode(numbers));
    orderedList.appendChild(myList);

}
/*

2. Låt funktionen generera en lista som innehåller ett 
slumpat antal element mellan 1 och 10. 
Värdet på dessa element ska också vara slumpade fast mellan 0-100. 
Exempel på 2 listor som kan bli genererade är: [0, 77, 26] 
och [22, 1, 78, 100, 0, 8, 10]

3. Skriv ut dessa i en numrerad lista under diven med id:t 
"resultat". Använd taggarna <ol> och <li> för detta.

*/