import{B as e,h as i,E as b}from"./index.757ffe30.js";function m(){const a=e(null),c=e(!0),n=e("id"),o=e(""),l=e(25),t=e(1),s=e(0),v=e([{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"100",value:100},{label:"Todas",value:0}]),f=i(()=>{const r=a.value?a.value.localItems.length:0;return{from:l.value*(t.value-1)+(r?1:0),to:l.value*(t.value-1)+r,of:s.value}}),u=()=>{a.value&&a.value.refresh()};return b([t,l,o],()=>{u()}),{perPageOptions:v,currentPage:t,perPage:l,searchQuery:o,sortBy:n,isSortDirDesc:c,refTable:a,total:s,dataMeta:f,refetchData:u}}export{m as u};
