const inject = (arrayData, objectData) =>{

    let currentPosition = 0;
    const newArray = new Array();
    for(let key of arrayData.keys()){
        if(currentPosition<objectData.length)
            if(key===objectData[currentPosition].index){
                newArray.push(objectData[currentPosition].content);
                currentPosition++;
            }
        newArray.push(arrayData[key]);    
    }
    return newArray;
}
export { inject };
