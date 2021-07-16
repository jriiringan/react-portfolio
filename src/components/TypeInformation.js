
import Typewriter from 'typewriter-effect';
export default function(){

    return (
        <Typewriter
          options={{
            strings: ['Mobile App Developer', 'React Native Developer','Backend Developer', 'PHP Developer', 'Web Server Management'],
            autoStart: true,
            loop: true,
          }}
          wrapperClassName={'typewriter'}
        /> 
    )
}