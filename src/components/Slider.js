const Slider = () => {
    return (
    <div class="slideshow-container">

        <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img id="one" src="/images/one.jpg" width="100%" />
        <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="/images/two.jpg" width="100%"/>
        <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="/images/three.jpg" width="100%" />
        <div class="text">Caption Three</div>
        </div>
        
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
    )
}

export default Slider