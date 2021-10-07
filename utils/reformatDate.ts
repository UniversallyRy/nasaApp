export const reformatDate = (date:string) => {
    let splitDate, year, month, day 
    if(date == undefined){
        return null
    }
    else if(date.length > 10){
        const fDate = date.slice(0, 10);
        const fTime = date.slice(11, 19);
        splitDate = fDate.split('-');
        [year, month, day] = splitDate;
        return [month, day, year].join('-') + " at " + fTime;
    }else{
        splitDate = date.split('-');
        [year, month, day] = splitDate;
        return [month, day, year].join('-');
    }
}