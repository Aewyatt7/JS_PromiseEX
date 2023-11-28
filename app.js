/* On my own


 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
const errPara = document.getElementById('error');
const list = document.getElementById('list');

//Exercise 2
getList()
.then ((hobbitlist) => {
  const hobbitListUL = document.getElementById('list');
  
  hobbits.forEach((hobbit) =>  {
    const hobbitListItem = document.createElement('li');
    hobbitListItem.textContent = hobbit;
    hobbitListUL.appendChild(hobbitListItem);
  });
})
.catch((wrongObject) => {
  // TODO: Handle the resolved or rejected states of the promise
  const errPara = document.getElemeentById('error');
  errPara.textContent = wrongObject.message; 
});


// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)


// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
*/


function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// THIS IS WITH HUNTER
//Excerise 1
const errorPara = document.querySelector("#error");
const list = document.querySelector ("#list");

getList()
.then((resolvedValue) => {
  console.log(resolvedValue);
for (let i = 0; i < resolvedValue.length; i++);
//create element
 hobbitLI = document.createElement("li");
//Modify the element
 hobbitLI.textContent = resolvedValue[i];
//aooend the element
list.append(hobbitLI);
})
.catch((rejectedValue) => {
  console.log(rejectedValue) 
}); 

resolvedValue.forEach((hobbitName, index, array) => {
//create an element
const hobbitLI = createElement("li");
//modify the element
 hobbitLI.textContent = hobbitName;
 //Append the element
 list.append(hobbitLI);
});
/*
.catch((rejectedValue) => {
  console.log(rejectedValue) 
  errorPara.textContent = rejectedValue.message;
}); */




  // TODO: Handle the resolved or rejected states of the promise



// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)


// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)