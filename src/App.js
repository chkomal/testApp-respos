import './App.scss';
import Repos from  './Components/Repos/Repos';
import devballteam from './devballteam.json';

function App() {
  if(devballteam && devballteam.length > 0) {   // error handling 
    return (
      <>
        {
          devballteam.map((data, index)=>{
            return(
              <Repos data_user={data} data_update={data.data_update}/>     // dynamically adding repos component 
            )
            
          })
        }
      {/* 
      <Repos data_user={devballteam}  />
      <Repos data_user={devballteam} /> */}
      </>
    );
  } else {
    return (
      <p className="errorMsg">No Repository available.</p>
    )
  }
}

export default App;
