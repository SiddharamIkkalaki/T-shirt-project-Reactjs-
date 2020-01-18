import React, { Component } from 'react';
import Display from '../design/display';
import Settings from '../design/settings';
import {storage} from '../../config/firebaseconfig';
import { connect } from 'react-redux';
import {SaveDesign} from '../../store/actions/saveDesignAction'

class Dashboard extends Component {
    state = {
        tshirtColor: "black",
        upperText: "This is Upper Text",
        lowerText: "This is Lower Text",
        memeImg: "",
        url: '',
        textsize: 30,
        textColor: 'white'
    }
    handletShirtColor = (e) => {
    //    console.log(e.target.id)
    this.setState({tshirtColor:e.target.id})
    }
    handleUpperText = (e) => {
        //    console.log(e.target.id)
        this.setState({upperText:e.target.value})
        }
        handleLowerText = (e) => {
            //    console.log(e.target.id)
            this.setState({lowerText:e.target.value})
            }
        handleImageUpload = (e) => {
            if(e.target.files[0]){
                const image = (e.target.files[0]);
                const uploadTask = storage.ref(`images/${image.name}`).put(image);
                uploadTask.on('state_changed', 
                  (snapshot) => {
                      console.log(snapshot);
                  },
                  (error) => {
                      console.log(error);
                  },
                  () => {
                      storage.ref('images').child(image.name).getDownloadURL().then(url => {
                          this.setState({url})
                      })
                  }           
            )
            }
        }

        handleTextSize =(e) =>{
         this.setState({textsize:e.target.value})
        }

        formatText(){
            const size = this.state.textsize;
            return parseInt(size);
        }
        handleTextColor = (e) => {
            this.setState({textColor: e.target.value})
        }

        handleSaveDesign=(e) =>{
            if(e.target.id === 'SaveDesign'){
                this.props.SaveDesign(this.state);
            }

        }
    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Display display = {this.state} formatText={this.formatText()}/>
                    </div>
                    <div className="col-lg-4">
                        <Settings 
                        color = {this.handletShirtColor}
                        uppertext = {this.handleUpperText}
                        lowertext = {this.handleLowerText}
                        uploadImage = {this.handleImageUpload}
                        textSize = {this.handleTextSize}
                        textColor = {this.handleTextColor}
                        savedesign = {this.handleSaveDesign}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        SaveDesign: (design)=>dispatch(SaveDesign(design))
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);
