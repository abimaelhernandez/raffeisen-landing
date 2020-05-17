/* eslint react/prop-types: 0 */
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import $ from 'jquery'


export default class ToolsSlider extends Component {

  componentDidMount ( ) {
    // $('#recipeCarousel').carousel({
    //   interval: 10000
    // })
    $( document ).ready(() => {
        console.log( 'ready!' )
        $('.carousel .carousel-item').each(() => {
          let next = $(this).next()
          if (!next.length) {
            next = $(this).siblings(':first')
          }
          next.children(':first-child').clone().appendTo($(this))

          if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this))
          }
          else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this))
          }
        })
    })
  }

  closeSlider = () => {
    const { resetProps } = this.props
    resetProps(true)
  }

  getActive = (item) => {
    const { clickedId } = this.props
    if(clickedId === item.id){
      return true
    }
    return false
  }

  render(){
    // const { toolsObject } = this.props

    return (
      <div className="tools-slider-parent">
        <div className="container-fluid">
            <div id="carouselExample" className="carousel slide" data-ride="carousel" data-interval="9000">
                <div className="carousel-inner row w-10 mxauto" role="listbox">
                    <div className="carousel-item col-md-4 active">
                        <img className="img-fluid mx-auto d-bloc" src="//placehold.it/600x400/000/fff?text=1" alt="slide 1"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=2" alt="slide 2"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=3" alt="slide 3"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=4" alt="slide 4"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=5" alt="slide 5"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=6" alt="slide 6"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=7" alt="slide 7"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=8" alt="slide 8"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=8" alt="slide 8"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=8" alt="slide 8"/>
                    </div>
                    <div className="carousel-item col-md-4">
                        <img className="img-fluid mx-auto d-block" src="//placehold.it/600x400?text=8" alt="slide 8"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <i className="fa fa-chevron-left fa-lg text-muted"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                    <i className="fa fa-chevron-right fa-lg text-muted"></i>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
      </div>
  )}
}

// ToolsSlider.propTypes = {
//   clickedId:  PropTypes.number
// }
