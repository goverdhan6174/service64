import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {GiPineTree} from 'react-icons/gi'
import {BsBriefcase} from 'react-icons/bs'
import {TiBrush} from 'react-icons/ti'
import {AiOutlineCar} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'

import { GiSpade, GiLargePaintBrush, GiOpenedFoodCan, GiPikeman, GiVacuumCleaner, GiWoodCabin } from "react-icons/gi";

import {FaRegHospital, FaRegMoneyBillAlt} from 'react-icons/fa'

export default class PopularCategoriesMore extends Component {
    states = {
        items: [
            {
                icon: <GiSpade />,
                title: 'Constructor ',
                url: '/list',
                img: require('../../../assets/images/hayden-mills-2_3JKm2BPNs-unsplash.jpg')
            },
            {
                icon: <GiLargePaintBrush />,
                title: 'Painter ',
                url: '/list',
                img: require('../../../assets/images/steve-johnson-Xx_d26R37E4-unsplash.jpg')
            },
            {
                icon: <GiOpenedFoodCan />,
                title: 'Chef ',
                url: '/list',
                img: require('../../../assets/images/peter-dawn-mM-L0yx5LcQ-unsplash.jpg')
            },
            {
                icon: <GiPineTree />,
                title: 'Decorator ',
                url: '/list',
                img: require('../../../assets/images/samantha-gades-x40Q9jrEVT0-unsplash.jpg')
            },
            {
                icon: <GiPikeman />,
                title: 'Caretaker ',
                url: '/list',
                img: require('../../../assets/images/martin-jernberg-Bl9Fvf0xB-0-unsplash.jpg')
            },
            {
                icon: <AiOutlineCar />,
                title: 'Rent a car ',
                url: '/list',
                img: require('../../../assets/images/oscar-nilsson-BWcLCtdKqT8-unsplash.jpg')
            },
            {
                icon: <GiVacuumCleaner />,
                title: 'Helping Hand',
                url: '/list',
                img: require('../../../assets/images/felix-prado-nbKaLT4cmRM-unsplash.jpg')
            },
            {
                icon: <GiWoodCabin />,
                title: 'Carpenter',
                url: '/list',
                img: require('../../../assets/images/barthelemy-de-mazenod-se4NQY7-zSQ-unsplash.jpg')
            }
        ]
    }
    render() {
        return (
            <>
                {this.states.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
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