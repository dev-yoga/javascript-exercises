const removeFromArray = function(arr, value) {

    // console.log(arr);
    // console.log(x);
    // const id = arr.indexOf(x);
    // console.log(id);
    // return arr.splice(id, 1);

    // passes first test but ;;
    
    return arr.filter(function(ele){
        return ele !== value;
    });

};

// Do not edit below this line
module.exports = removeFromArray;
