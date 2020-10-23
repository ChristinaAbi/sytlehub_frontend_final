import React from 'react';

export default function Stylists (props) {
    return (
         <div>
            {props.stylists.map( stylist => {
                return (
                    <div key={stylist.id} className="stylist">
                        <h2>
                            {stylist.name}
                        </h2>
                        <p>
                            Location: {stylist.location}
                        </p>
                        <p>
                            Style Type: {stylist.style_type}
                        </p>
                        <p>
                            {stylist.img}
                        </p>
                    </div>
                )
            })}
         </div>
    )
}