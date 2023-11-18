import React, { Component } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;
    render(){
        return (
            <div>
            <h2>색상 선택</h2>
            <div style={{display: 'flex'}}>
                {colors.map(color=>(
                    <div
                    key={color}
                    style={{
                        background:color,
                        width:'24px',
                        height:'24px',
                        cursor:'pointer'
                    }}
                    onClick={()=>this.context.actions.setColor(color)}
                    onContextMenu={e => {
                        e.preventDefault();
                        this.context.actions.setSubcolor(color);
                    }}
                    />
                    ))}
            </div>
            <hr/>
        </div>
      );
    }
};

export default SelectColors;