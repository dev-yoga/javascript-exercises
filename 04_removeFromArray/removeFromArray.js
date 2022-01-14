const removeFromArray = function(arr, ...values) {

	return arr.filter(item => !values.includes(item));

    // // console.log(arr);
    // // console.log(x);
    // // const id = arr.indexOf(x);
    // // console.log(id);
    // // return arr.splice(id, 1);

    // // passes first test but ;;
    
    // return arr.filter(function(ele){
    //     return ele !== values;
    // });

};

// Do not edit below this line
module.exports = removeFromArray;
