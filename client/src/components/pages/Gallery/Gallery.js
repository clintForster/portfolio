import React, { Component } from "react";
import Title from "../../Title/Title.js";
import $ from "jquery";
import "./Gallery.css";

class Gallery extends Component {

    componentDidMount() {
        $(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>")
    let imgSrc = $(this).find("img").attr("src");
     $(this).css('background-image', 'url(' + imgSrc + ')');
  })
            
  
  $(".img-c").click(function() {
    let w = $(this).outerWidth()
    let h = $(this).outerHeight()
    let x = $(this).offset().left
    let y = $(this).offset().top
    
    
    $(".active").not($(this)).remove()
    let copy = $(this).clone();
    copy.insertAfter($(this)).height(h).width(w).delay(500).addClass("active")
    $(".active").css('top', y - 8);
    $(".active").css('left', x - 8);
    
      setTimeout(function() {
    copy.addClass("positioned")
  }, 0)
    
  }) 
  
  

  
})

$(document).on("click", ".img-c.active", function() {
  let copy = $(this)
  copy.removeClass("positioned active").addClass("postactive")
  setTimeout(function() {
    copy.remove();
  }, 500)
})
    }


    render() {
        return (
            <div>
                <Title />
                <div className="gallery">
                    <div className="img-w"><img src="" alt="img1" /></div>
                    <div className="img-w"><img src="" alt="img2" /></div>
                    <div className="img-w"><img src="" alt="img3" /></div>
                    <div className="img-w"><img src="" alt="img4" /></div>
                    <div className="img-w"><img src="" alt="img5" /></div>
                    <div className="img-w"><img src="" alt="img6" /></div>
                    <div className="img-w"><img src="" alt="img7" /></div>
                    <div className="img-w"><img src="" alt="img8" /></div>
                    <div className="img-w"><img src="" alt="img9" /></div>
                </div>
            </div>
        );

    }

}

export default Gallery;