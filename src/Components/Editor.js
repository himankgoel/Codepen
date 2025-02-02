import React,{useState} from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"; //HTML 
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import {Controlled as ControlledEditor} from "react-codemirror2";
export default function Editor(props) {

    const [open,setOpen] = useState(true);
    const {language , displayName,value,onChange } = props;

    function handleChange(editor,data,value){
        onChange(value);
    }
    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <i  className={`fas fa-${open ? 'compress' : 'expand'}-alt`}
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                </i>
                
            </div>
        <ControlledEditor 
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping : true,
                lint:true,
                mode:language,
                theme : 'material',
                lineNumbers : true
            }}
        />
        </div>
    )
}