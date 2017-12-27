let getPermutations = (...elements) => {
    let elmentsIsUsed = elements.map( value => false );
    let currentPermutation = [];
    let permutations = [];

    let generatePermutations = () => {
        let isLastPerm = true;

        for(let elementKey in elements){

            if(elmentsIsUsed[elementKey] === false){
                currentPermutation.push(elements[elementKey]);
                elmentsIsUsed[elementKey] = true;
                isLastPerm = false;
                generatePermutations();
                elmentsIsUsed[elementKey] = false;
                currentPermutation.pop(elements[elementKey]);
            }
        }

        if(isLastPerm === true){
            permutations.push(currentPermutation.slice(0));
        }

    };

    generatePermutations();

    return permutations;

};

console.log(getPermutations(1,2,3,4));