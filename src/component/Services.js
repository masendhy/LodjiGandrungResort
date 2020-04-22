import React, { Component } from 'react';
import{FaCocktail,FaHiking,FaBeer, FaShuttleVan} from 'react-icons/fa';
import Title from './Title'


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free coktails',
                info:'Lorem Ipsum is not simply random text',
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Lorem Ipsum is not simply random text',
            },
            {
                icon:<FaShuttleVan/>,
                title:'free Shuttle',
                info:'Lorem Ipsum is not simply random text',
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer',
                info:'Lorem Ipsum is not simply random text',
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}

                </div>
                
            </section>
        )
    }
}
