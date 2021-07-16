
import Typewriter from 'typewriter-effect';
export default function(){

    return (
        <Typewriter
          options={{
            strings: ['Mobile App Developer', 'Backend Developer', 'PHP Developer', 'Server Management'],
            autoStart: true,
            loop: true,
          }}
          wrapperClassName={'typewriter'}
        /> 
    )
}