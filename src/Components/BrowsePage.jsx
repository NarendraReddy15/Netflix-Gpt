
import {options} from "../Constant.js/contants";
import BrowseMain from "../Pages/BrowseMain";
import BrowseSecond from "../Pages/BrowseSecond";
import { useEffect ,useState} from "react";
const BrowsePage=()=>{
const [data,setData]=useState();
async function fetchLivemoves(){
    try{
       const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
const data=await response.json(); 
setData(data);
console.log(data);
}
    catch(error){
        console.log(error);
    }
}
useEffect(()=>{
    fetchLivemoves();
},[])
  if (!data) {
    return <h1>Loading...</h1>;
  }
    return (
<div>
<BrowseMain movies={data}/>
<BrowseSecond movies={data} />

</div>
    )
}
export default BrowsePage;