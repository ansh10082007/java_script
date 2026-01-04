books=[
    {title:"Book one",genre:"history",publish:1970,edition:1980},
    {title:"Book two",genre:"science",publish:1994,edition:2000},
    {title:"Book three",genre:"science",publish:1870,edition:1980},
    {title:"Book four",genre:"fiction",publish:1970,edition:1980},
    {title:"Book five",genre:"fiction",publish:1970,edition:1980},
    {title:"Book six",genre:"science",publish:2014,edition:2016},
    {title:"Book seven",genre:"science",publish:1979,edition:1989},
    {title:"Book eight",genre:"history",publish:1870,edition:1900},
    {title:"Book eight",genre:"history",publish:1570,edition:1900},
]
/*
const userBooks = books.filter( (bk) => {
    if(bk.genre=="history"){
        return bk;
    }
})
*/

/*
const userBooks = books.filter((bk)=>{
    if(bk.publish>=1990){
        return bk;
    }
})
*/

const userBooks = books.filter((bk)=>{
    if(bk.genre=="science" && bk.edition>=2000){
        return bk;
    }
})
console.log(userBooks);
