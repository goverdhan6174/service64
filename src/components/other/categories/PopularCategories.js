import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineCar} from 'react-icons/ai';
import { FaTelegramPlane,FaMicrochip, FaBolt, FaGasPump, FaPiedPiperAlt, FaToolbox, FaThermometerHalf} from "react-icons/fa";

class PopularCategories extends Component {
    states = {
        items: [
            {
                icon: <FaTelegramPlane />,
                title: 'Home Shifting',                
                url: '/list',
                img: require('../../../assets/images/shifting.jpg')
            },
            {
                icon: <FaBolt />,
                title: 'Electricity ',                
                url: '/list',
                img: require('../../../assets/images/electrician.jpg')
            },
            {
                icon: <FaGasPump />,
                title: 'Gas Mechanic ',
                url: '/list',
                img: require('../../../assets/images/gas-mechanic.jpg')
            },
            {
                icon: <AiOutlineCar />,
                title: 'Ambulance ',
                url: '/list',
                img: require('../../../assets/images/key-531171_640.jpg')
            },
            {
                icon: <FaPiedPiperAlt />,
                title: 'Plumbing ',
                url: '/list',
                img: require('../../../assets/images/plumbing-840835_640.jpg')
            },
            {
                icon: <FaMicrochip />,
                title: 'Electronic Repair ',
                url: '/list',
                img: require('../../../assets/images/service-428539_640.jpg')
            },
            {
                icon: <FaToolbox />,
                title: 'Fridge Mechanic ',
                url: '/list',
                img: require('../../../assets/images/of-technology-5004867_640.jpg')
            },
            {
                icon: <FaThermometerHalf />,
                title: 'AC Repair',
                url: '/list',
                img: require('../../../assets/images/study-5645247_640.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 col-sm-3 column-td-6" key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <div className="cat-main">                                    
                                    <div className="cat-item-home">
                                        <span className="cat-icon">{item.icon}</span><span className="category-title">{item.title}</span>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularCategories;