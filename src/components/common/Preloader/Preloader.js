import React from 'react';
import { RingLoader } from 'react-spinners';
//import { css } from '@emotion/core';

//import { ClipLoader } from 'react-spinners';

//import ClipLoader from 'react-spinners/ClipLoader';

// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
//     background-color: black;
// `;
const override = {
    display:'block',
    margin: '0 auto',
    borderColor: 'black'   
}


class Preloader extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      }
    }
   
       
        render(){ 
      
    return ( <div>
               
                    
                {/* <div className='sweet-loading'>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={100}
                        color={'#123ab'}
                        loading={this.state.loading}
                />
                </div>  */}
                <div className='sweet-loading'>
                        <RingLoader
                            css={override}
                            sizeUnit={"px"}
                            size={100}
                        color={'#123abc'} 
                        loading={this.state.loading} 
                        />
                </div>
      </div>  
      )
    }    
   }   
   export default Preloader;    