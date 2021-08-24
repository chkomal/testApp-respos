import './repos.scss';

function Repos(props) {
    const {data_user, data_update}=props; 

    var result = null;
    if(data_user.repositoriesData.length >0){
        result = data_user.repositoriesData.map((value,key)=>{
            let day = new Date(value.LastUpdateDate);
            var dd = day.getDate();
            var mm = parseInt(day.getMonth()+1)
            if(dd < 10){
                dd = '0' + dd;
            }
            if(mm < 10){
                mm = '0' + mm;
            }
            let updateDate= day.getFullYear()+ "-"+ mm +"-"+ dd;
            if( data_update && data_update === updateDate.toString()){
                return (
                    <tr key={key}>
                        <td>{value.repositoryName}</td>
                        <td>{value.repositoryDescription}</td>
                        <td>{updateDate}</td>
                        <td><a href="#">{value.urlToDownload}</a></td>
                    </tr>
                );
            } 
        })
    }
  return (
    <>
    <div className="container">
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3>User Name : {data_user.userName}</h3>
        </div>
        <div className="panel-body">
            <table className="table">
                 <caption>REPOSITORY INFORMATION</caption>
                  <thead>
                      <th>Repository name</th>
                      <th>Repository description</th>
                      <th>Last update date</th>
                      <th>url</th>
                </thead>
                <tfoot>
                    <tr>
                        <td >Showing only updated respository on specific date </td>
                    </tr>
                </tfoot>
                <tbody>
                    {result}              
                </tbody>
            </table>
        </div>
    </div>
</div>
    </>
  );
}

export default Repos;
