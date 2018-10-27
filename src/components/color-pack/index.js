import React, { Component } from 'react'
import './styles.css'
import { reactLogo, reduxLogo, csharpLogo, cssLogo, firebaseLogo, gitLogo, htmlLogo, jsonLogo, 
  javascriptLogo, mongodbLogo, nodejsLogo, postmanLogo } from '../../images'

class ColorPack extends Component {
  render() {
    return (
      <div className='color-container'>
        <div className='color-container'>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={reactLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={reduxLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={javascriptLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={htmlLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={cssLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-4'>
            <img className='color-image' src={mongodbLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={firebaseLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
        </div>
        <div className='color-container' style={{float: 'center'}}>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '50px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-4'>
            <img className='color-image' src={nodejsLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={postmanLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={csharpLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-2'>
            <img className='color-image' src={gitLogo}></img>
          </div>
          <div style={{display: 'table-cell', verticalAlign: 'middle', width: '40px'}}><p>&nbsp;</p></div>
          <div className='colorpack colorpack-1'>
            <img className='color-image' src={jsonLogo}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPack
