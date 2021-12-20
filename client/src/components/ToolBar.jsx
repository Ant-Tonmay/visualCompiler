

const toolbarStyle = {
    height: '60px',
    display: 'flex',
    // background: '#000'
}
const left = {
    
    display: 'flex',
    flex: '2',
    padding: '5px',
    // background: 'grey',
    flexDirection: 'column'
}

const selectStyle = {
    width: '150px',
    height: '30px',
    outline: 'none',
    borderRadius: '5%'

}
const codeHeader = {
    marginLeft: '2px',
    fontSize: '15px',
    height: '50%',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    
}
const right = {
    display: 'flex',
    flex: '3',
    padding: '5px',
    position: 'relative'
}
const minExeBoard = {
    height: '35px',
    width: '100px',
    background: '#d43a1c99',
    display:'flex',
    justifyContent: 'right',
    position: 'absolute',
    top: '25px',
    left: '500px'
}
export default function ToolBar(props) {
    const {
        onSelect,
        onMaximize,
        onRun
    } = props;
    function handleChange(e) {
        onSelect(e.target.value);
    }
    function handleMaximize() {
        onMaximize();
    }
    function handleRun() {
        onRun();
    }

    return (
        <div key={'toolbar'} style={toolbarStyle}>
            <div key={'left'} style={left}>
                
                <select style={selectStyle} onChange={handleChange}>
                    <option value='lang'>Languages</option>
                    <option value='clike'>C</option>
                    <option value='clike'>C++</option>
                    <option value='javascript'>JavaScript</option>
                </select>
                <div key={'codeHeader'} style={codeHeader}>
                    <p>Code</p>
                    <button style={{margin:'2px'}} onClick={handleRun}>Run</button>
                    <button style={{margin:'2px'}}>Stop</button>
                    <button style={{margin:'2px'}}>Pause</button>
                </div>
            </div>
            <div key={'right'} style={right}>
                <div style={minExeBoard} id="minExeBoard" key={"minExeBoard"}>
                    <button id="maximize" onClick={handleMaximize}>Max</button>
                </div>
            </div>
        </div>
    )
}  