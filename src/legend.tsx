import React, { useRef } from 'react';
import LegendStyle from './legend.module.css';

type TLegend = {
    active: boolean,
    color: string,
    text: string
}
function Legend(props: TLegend) {
    return (
          <div className = {LegendStyle.line} style = {{opacity: props.active ? "1" : "0.6"}}>
              <div className = {LegendStyle.square} style = {{background: props.color}}></div>
              <span className = {LegendStyle.title} style = {{textDecorationLine: props.active ? "underline" : "none", textDecorationColor: props.color}}>{props.text+" Сегмент"}</span>
          </div>
    )}
export default Legend;