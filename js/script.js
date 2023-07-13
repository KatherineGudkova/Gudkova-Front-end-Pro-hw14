const array = [1, 2, 3, 4, 5, 6, 7];
const element = prompt(`Current array: ${array}.
Enter the element you want to remove:`);

removeElement(element);

function removeElement(element) {
    let indexElement = -1;

    array.forEach((number, index) => {
            if (element == number) {
                indexElement = index;
            }
    })
    
    if (indexElement != -1) {
        array.splice(indexElement, 1);

        alert(`Modified array: ${array}.`);
    }
    else {
        alert(`Error.There is no such element in this array.`);
    }
}