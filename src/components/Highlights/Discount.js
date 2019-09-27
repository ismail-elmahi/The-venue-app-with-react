import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '../utilis/Buttons';



class Discount extends Component {
  
  state = {
      discountStart: 0,
      discountEnd:30
  }
  
  porcentage= () => {
      if(this.state.discountStart < this.state.discountEnd){
          this.setState({
              discountStart: this.state.discountStart + 1
          })
      }
  }
  
  componentDidUpdate(){
      setTimeout(() => {
          this.porcentage()
      },30)
  }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                    onReveal={() => this.porcentage()}
                    >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                   <Slide right>
                   <div className="discount_description">
                        <h3>Purchase tickets before 20th JUNE</h3>
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting and we need something Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                   
                   <Button
                   text="Purchase Tickets"
                   bck="#ffa800"
                   color="#ffffff"
                   link="http://google.com"
                   />

                    </div>
                   </Slide>
                    
                </div>  
            </div>
        );
    }
}

export default Discount;