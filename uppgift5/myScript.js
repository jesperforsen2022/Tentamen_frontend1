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