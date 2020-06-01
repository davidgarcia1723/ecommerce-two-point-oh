import React from 'react';
import './Slideshow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
	{
		name: 'photo1',
		img: 'img/accesories.jpg'
	},
	{
		name: 'photo2',
		img: 'img/lite.jpg'
	},
	{
		name: 'photo3',
		img: 'img/mario.jpg'
	},
	{
		name: 'photo4',
		img: 'img/playing.jpg'
	},
	{
		name: 'photo5',
		img: 'img/pro.jpg'
	}
]

class Slideshow extends React.Component {
    render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			arrows: true,
			slidesToScroll: 1,
			className: "slides"
		}
        return (
            <div className="slideshow">
				<Slider {...settings}>
					{photos.map((photo) => {
						return (
							<div>
								<img src={photo.img} />
							</div>
						)
					})}
				</Slider>
			</div>
		);
	}}

export default Slideshow;