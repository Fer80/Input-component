import React from 'react';

import '../assets/styles/Input.css';

const Input = props => {

    const error = props.error ? 'error ' : '';
    const size = props.size ? `${props.size} ` : '';
    const fullWidth = props.fullWidth ? 'full-width ' : '';
    const startIcon = props.startIcon ? 'start-icon ' : '';
    const endIcon = props.endIcon ? 'end-icon' : '';

    return (
        <div className="input-group">

            {props.multiline ? 
                <textarea
                    value={props.value || null}
                    disabled={props.disabled}
                    className={`multiline ${error+size+fullWidth}`} 
                    rows={props.row}
                    placeholder="Placeholder">
                </textarea>
                :
                <input 
                    value={props.value || null}
                    disabled={props.disabled}
                    className={`input ${error+size+fullWidth+startIcon+endIcon}`} 
                    placeholder="Placeholder"
                />
            }

            {props.startIcon &&
                <span className="material-icons start-icon">{props.startIcon}</span>
            }

            {props.endIcon &&
                <span className="material-icons end-icon">{props.endIcon}</span>
            }
            
            {props.helperText &&
                <small>{props.helperText}</small>
            }
            <label className="input-label">Label</label>
        </div>
    );
} 

export default Input;
