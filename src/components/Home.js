import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Home.css';


const Home = () => {
    const onchange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
        var imgBuffer = Buffer(reader.result);
        console.log(imgBuffer);
        };
        };
        // const onSubmit = (e) => {
        //     e.preventDefault();
        //     // setLoading(true);
        //     // addData();
        // };
    
    return (
        <div className='home'>
            <div className='form' >
                <div className='fm_ct'>
                <form >
                <label >
                    <input type='text' name='name' placeholder='Name' />
                </label>
                <br/>
                <br/>
                <label>
                    <input type='text' name='last' placeholder='Last Name'/>
                </label>
                <br/>
                <br/>
                <label>
                    <input type='text' name='Sign' placeholder='Sign ID'/>
                </label>
            </form>
                </div>
                <br/>
                <br/>
                <input type='file' name ='file' className='int_fl' 
                onChange={onchange}/>

                <br/>
                <br/>
                <button type='submit' required
                accept='.png, .jpg, .jpeg'
                className='sbmt_bt'
                > < GetAppIcon/>Upload File</button>
                
            </div>
            
        </div>
    )
}

export default Home
