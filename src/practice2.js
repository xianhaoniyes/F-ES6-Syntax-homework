// const inject = (arrayData, objectData) =>{

//     let currentPosition = 0;
//     const newArray = new Array();
//     for(let key of arrayData.keys()){
//         if(currentPosition<objectData.length)
//             if(key===objectData[currentPosition].index){
//                 newArray.push(objectData[currentPosition].content);
//                 currentPosition++;
//             }
//         newArray.push(arrayData[key]);    
//     }
//     return newArray;
// }


const inject = (arrayData,objectData) => {
    for (let i = objectData.length-1; i>=0; i--)
        arrayData.splice(objectData[i].index,0,objectData[i].content);
    return arrayData;
}
export { inject };
