import { useMemo, useState, MouseEventHandler } from "react";
import Legend from "./legend";
import AppStyle from "./app.module.css";
import Paths from "./paths.json";

type tPath = {
        id: number,
        name: string,
        color: string,
        coords: string
}

function App(){
    const [active, setActive] = useState<number>(-1);
    let pathsArray = useMemo(()=>{
        let tempArr: Array<string> = []
        Paths.map((elem: tPath) => {
            tempArr[elem.id] = toPathCoords(elem.coords).join(",");
        });
        return tempArr; 
    },[Paths]);

    function toPathCoords(coordinates: string){
        let arr: (string|number)[] = coordinates.split(", ").map((item: string | number, index:number) => {
            item = Number(item)/ 5.13 ;
            if(index === 2){
                item = 'L' +  item;
            }
            else if(index === 0){
                item = 'M' + item;
            }
            return item;
        });
        return arr;
    }
    const handleMouseEnter: MouseEventHandler<SVGPathElement> = (e: any) => {
        const tempSection: any = e.target.closest("#path");
        if(tempSection != null){
            tempSection.style.opacity = "0.2";
            setActive(tempSection.getAttribute("data-value"));
        }
    }
            
   const handleMouseLeave: MouseEventHandler<SVGPathElement> = (e: any) => {
        const tempSection: HTMLInputElement | null = e.target.closest("#path");
        if(tempSection){
            tempSection.style.opacity = "0";
            setActive(-1);
        }
    }
    return(
        <div className={AppStyle.area}>
            <div className = {AppStyle.diagram}>
                    <svg className = {AppStyle.chart} width="514" height="514" viewBox="0 0 100 100">
                    <circle className = {AppStyle.section} r="25" cx="50%" cy="50%"></circle>
                    <circle className = {AppStyle.section} r="25" cx="50%" cy="50%"></circle>
                    <circle className = {AppStyle.section} r="25" cx="50%" cy="50%"></circle>  
                    {pathsArray.length != 0 && pathsArray.map((elem, index) => {
                        return(
                            <path className = {AppStyle.path} id = "path" d={elem}  data-value = {index}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index}/>
                        )  
                    })}                 
                </svg>
            </div>
            <div className = {AppStyle.legend}>
                {Paths.length != 0 && Paths.map((elem, index) => {
                    return(
                        <Legend color = {elem.color} text = {elem.name} active = {(active == elem.id) ? true : false} key={index}/>
                    )
                })
                }
                </div>
        </div> 
    )
}
export default App;