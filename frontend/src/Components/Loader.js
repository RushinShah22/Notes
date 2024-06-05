import { TailSpin } from 'react-loader-spinner'


function Loader(){
    return (
        <div className=".container .is-max-widescreen">
            <TailSpin
            
            color="green"
            ariaLabel="loading"
            />  

        </div>
        
    )
}

export default Loader