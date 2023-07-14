const arrayUser = prompt(`Enter array elements separated by commas (,):`);
const array = arrayUser.split(",");

const element = prompt(`Current array: ${array}.
Enter the element you want to remove:`);

removeElement(array,element);

function removeElement(array, element) {
    
    const index = array.indexOf(element);
    
    if (index != -1) {
        array.splice(index, 1);

        alert(`Modified array: ${array}.`);
    }
    else {
        alert(`Error.There is no such element in this array.`);
    }
}