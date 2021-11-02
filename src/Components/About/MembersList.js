import React from 'react'

export default function MembersList() {
    const members = [
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
        <div>
            {members.map(member => {
                return (
                    <div className="container">
                        <div className="card" style={{width:'16rem'}}>
                            <img src={member.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">{member.description}</p>
                                <li><a href="#" className="card-link">{member.linkedinUrl}</a></li>
                                <li><a href="#" className="card-link">{member.facebookUrl}</a></li>
                            </div>
                       </div>
                   </div>    
                )
            })}
        </div>
    )

}    