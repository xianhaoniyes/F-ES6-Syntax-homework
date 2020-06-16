const parseData = (input) => {
    const {data,column} = input;
    const columnItems = column.map(item => item.name);
    const newData = new Array();

        for(let person of data){
            const newPerson = columnItems.reduce((newP,item,index) => {
                newP[item] = person[index];
                return newP;
            },{});
            newData.push(newPerson);
        }
    return newData;
    
}



export { parseData };
