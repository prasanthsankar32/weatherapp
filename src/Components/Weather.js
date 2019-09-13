import React from 'react';

const Weather = props => ( 
        <div className="weather_info">
        {props.city && props.country && <p className="weather_key">Location:
                <span className="weather_value"> {props.city},{props.country}</span></p>}
        {props.temperature && <p className="weather_key">Temperature:
                <span className="weather_value"> {props.temperature}</span></p>}
        {props.humidity && <p className="weather_key">Humidity:
                <span className="weather_value"> {props.humidity}</span></p>}
        {props.description && <p className="weather_key">Condition:
                <span className="weather_value"> {props.description}</span></p>}
        {props.error && <p className="weather_error">{props.error}</p>}
        </div>
);


// const Weather = (props) => {
//     return ( 
//         <div>
//         {props.city && props.country && <p>Location:{props.city},{props.country}</p>}
//         {props.temperature && <p>Temperature:{props.temperature}</p>}
//         {props.humidity && <p>Humidity:{props.humidity}</p>}
//         {props.description && <p>Condition:{props.description}</p>}
//         {props.error && <p>{props.error}</p>}
//         </div>
//     );
// }

// class Weather extends React.Component {
//     render() { 
//         return ( 
//             <div>
//                 {this.props.city && this.props.country && <p>Location:{this.props.city},{this.props.country}</p>}
//                 {this.props.temperature && <p>Temperature:{this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidity:{this.props.humidity}</p>}
//                 {this.props.description && <p>Condition:{this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}


//                 {/* <p>Location:{this.props.city},{this.props.country}</p>
//                 <p>Temperature:{this.props.temperature}</p>
//                 <p>Humidity:{this.props.humidity}</p>
//                 <p>Condition:{this.props.description}</p> */}
//             </div>
//         );
//     }
// }
 
export default Weather;