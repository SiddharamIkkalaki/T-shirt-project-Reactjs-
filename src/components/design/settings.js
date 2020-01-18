import React from 'react';
const imgurl = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v154517305/T-shirt%20Images/"
const Settings = ({color, uppertext, lowertext, uploadImage, textSize, textColor, savedesign}) => {
    return (
        <div className="card bg-light container">
            <h3 className="text-center">Settings</h3>
            <h4>Change T - shirt color</h4>
            <div className="tshirt-color">
                <img onClick={color} src={`${imgurl}white.png`} alt="White image" id="white"/>
                <img onClick={color} src={`${imgurl}black.png`} alt="Black image" id="black"/>
                <img onClick={color} src={`${imgurl}grey.png`} alt="Grey image" id="grey"/>
                <img onClick={color} src={`${imgurl}blue.png`} alt="Blue image" id="blue"/>
                <img onClick={color} src={`${imgurl}red.png`} alt="Red image" id="red"/>
            </div>
            <hr />
            <h4>Write Text</h4>
            <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Upper Text" 
                onChange={uppertext}
                />
            <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Lower Text" 
                onChange={lowertext}
                />
            <hr />
            <h4>Upload Image</h4>
            <div className="form-group">
                <input
                    type="file"
                    className="form-control-file-mb-2" 
                    onChange={uploadImage}
                    />
            </div>
            <hr />
            <h4>Text Size</h4>
            <input type="range" min="24" max="44" onChange={textSize}/>
            <hr />
            <h4>Text Color</h4>
            <select onChange={textColor} className="form-control form-control-sm-mb-2">
                <option>White</option>
                <option>Black</option>
                <option>Red</option>
                <option>Blue</option>
            </select>
            <hr />
            <button className="btn btn-primary btn-sm" id="SaveDesign"onClick={savedesign}>Save</button>
        </div>
    )
}

export default Settings;