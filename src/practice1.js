const parseData = (input) => {
    const {data,column} = input;
    const columnItems = column.map(item => item.name);
    const newData = new Array();

        for(let key of data.keys()){
            const newPerson = new Object();
            for(let index of columnItems.keys()){
                newPerson[columnItems[index]] = data[key][index];
            }
            newData.push(newPerson);
        }
    return newData;
    
}
export { parseData };
