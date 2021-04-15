import "./App.css";
import React, {useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

function App() {
    const suggestions = ['Damaged Hammer was being used at workshop, which can cause head injury', 'Stone was being used instead of hammer', 'Damaged wheel borrow was being used']
    const [value, onChange] = useState(new Date());
    const [showSuggestions, setShowSuggestions] = useState(false);

   const onChangeText = (e) =>{
    console.log(e.target.value)
    e.target.value ? setShowSuggestions(true) : setShowSuggestions(false)
   }
    return (
        <div className="App">
            <div>Observations Details</div>
            <br></br>
            <div className="obervation_block">
                On 	&nbsp;
                <DateTimePicker onChange={onChange}
                    value={value}/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>×  it was observed that</span>
                <form>
                    <input type="text" id="fname" name="fname" className="observation_field" onChange={(e)=>{onChangeText(e)}} placeholder="Enter your observation here"></input>
                    <br></br>
                    <input type="text" id="fname" name="fname" className="location_field" placeholder="at @Add Location"></input>
                    &nbsp;	&nbsp;	&nbsp;	&nbsp; 	&nbsp;	&nbsp;Reporting Time: {
                    moment(value).format('LLLL')
                } </form>
            </div>
            <br></br>
            <div>Suggestions</div><br></br>
            {
           showSuggestions && suggestions.map((suggestion) => {
                return <>
                    <div className="location_field sugg_block">
                        {suggestion}</div>
                    <br></br>
                </>
        })
        } </div>
    );
}

export default App;
