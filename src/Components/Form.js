import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <p><input type="text" name="city" placeholder="city..."/></p>
        <p><input type="text" name="country" placeholder="country..."/></p>
        <button>Get Weather</button>
    </form>
)

// class Form extends React.Component {
//     render() { 
//         return ( 
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="city..."/>
//                 <input type="text" name="country" placeholder="country..."/>
//                 <button>Get Weather</button>
//             </form>
//         );
//     }
// }
 
export default Form;