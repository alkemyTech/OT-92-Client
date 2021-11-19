import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMembers, fetchMembers} from '../../store/members/membersSlice';
import axios from 'axios';

export default function MembersList() {
    const dispatch = useDispatch();
    const {members} = useSelector(state => state.members)

useEffect(() => {
   dispatch(getMembers())
}, [dispatch])
    const membersMocked = [
        {
            name: 'Juan',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus sapien, tempus lacinia scelerisque a, ultricies eu dui. Donec quis iaculis arcu.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            facebookUrl: 'https://facebook.com/',
            linkedinUrl: 'https://linkedin.com/'
        },
        {
            name: 'Jorge',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus sapien, tempus lacinia scelerisque a, ultricies eu dui. Donec quis iaculis arcu.',
            image: 'https://randomuser.me/api/portraits/men/18.jpg',
            facebookUrl: 'https://facebook.com/',
            linkedinUrl: 'https://linkedin.com/'
        },
        {
            name: 'Fernando',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus sapien, tempus lacinia scelerisque a, ultricies eu dui. Donec quis iaculis arcu. ',
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
            facebookUrl: 'https://facebook.com/',
            linkedinUrl: 'https://linkedin.com/'
        },
        {
            name: 'Esteban',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus sapien, tempus lacinia scelerisque a, ultricies eu dui. Donec quis iaculis arcu. ',
            image: 'https://randomuser.me/api/portraits/men/31.jpg',
            facebookUrl: 'https://facebook.com/',
            linkedinUrl: 'https://linkedin.com/'
        },
        {
            name: 'Valentín',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacus sapien, tempus lacinia scelerisque a, ultricies eu dui. Donec quis iaculis arcu. ',
            image: 'https://randomuser.me/api/portraits/men/7.jpg',
            facebookUrl: 'https://facebook.com/',
            linkedinUrl: 'https://linkedin.com/'
        }
    ]

    return (
        <div style={{display:'flex', 
             justifyContent: 'center', 
             marginTop:'10px', 
             marginBottom:'20px', 
             gap:'10px'
        }}>
            {members && members.map((member, i) => {
                return (
                    <main key={i}>
                        <section className="card" style={{width:'16rem', backgroundColor:'lightblue'}}>
                            <img src={member.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">{member.description}</p>
                                <li><a href="#" className="card-link">{member.linkedinUrl}</a></li>
                                <li><a href="#" className="card-link">{member.facebookUrl}</a></li>
                            </div>
                       </section>
                   </main>    
                )
            })}
        </div>
    )

}    