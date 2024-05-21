import { useState, useEffect } from 'react';
import '../report.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HeaderImg from "../../assets/images/Family/FAMILY1.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css"
import axios from 'axios';

//import styles from './table.css'; 

export function StudentReport() {

  const[StudentReport, setStudentReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const borderColor = "border-inherit"


  useEffect(()=>{
    function getStudentReport(){           
      axios.get("http://127.0.0.1:5000/quizprofile").then((res)=>{
            console.log(res);
            setStudentReport(res.data);
            setLoading(false);

        }).catch((err)=>{
            alert(err.message);
            setLoading(false);
        })
    }
    getStudentReport();
} , []);

return (

  <div
  className=""
  >
  <div className="flex justify-center ">
    <div className="card" style={{ width:1600,marginTop:10, marginBottom:10, marginLeft:20, marginRight:20, backgroundColor:"#ABE8CA", borderRadius: 20, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"}}  >
        <div className="flex justify-center ">
            <div
            // className="w-full  h-72 relative rounded-t-3xl bg-stone-100"
            className="w-full  h-80 relative rounded-t-3xl bg-stone-100 bg-no-repeat bg-cover bg-contain bg-center"
            style={{ backgroundImage: `url(${HeaderImg})` ,height:200 }}
            >
              <div className="absolute top-0 left-0 ml-4 mt-4">
                <AwesomeButton
                  type="primary"
                  onReleased={() => {
                  navigate("/");
                 }}
                  style={{
                        "--button-primary-color": "#de2183",
                        "--button-primary-color-dark": "#c20d95",
                        "--button-primary-color-light": "#ffffff",
                        "--button-primary-color-hover": "#de2183",
                        "--button-primary-color-active": "#c20d95",
                        "--button-default-border-radius": "8px",
                        width: "120px",
                        height: "45px",
                        marginRight: "10px",
                        borderStyle: "solid",
                        borderRadius: "10px",
                        borderColor: "black",
                       }}
                >
              Go Home
                </AwesomeButton>
              </div>
                <div>
                <h1 className="text-5xl mr-30" 
                    style={{textAlign:'center',padding:50, height:150,marginTop:10, marginBottom:10, borderRadius: 20}}>
                     Report :)
                    </h1>
                </div>
            </div>
        </div>
    </div>
  </div>
     
          <table className="table table-responsive-sm" style={{"border": "2px solid black",textAlign: "center",width:1000, margin:50}}>

          <thead>
              <tr>
                  <th scope='col'>#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Education Level</th>
                  <th scope="col">Recommendation</th>
                  

              </tr>
          </thead>
          <hr></hr>
          <hr></hr>
          <tbody>{
          
              StudentReport.map((s, index) => {
                return(
                  <tr key={index}> 
                  <th scope="row">{index+1}</th>
                    <td><h6>{s.studentName}</h6></td>
                    <td><h6>{s.subjectName}</h6></td>   
                    <td><h6>{s.educationalLevel}</h6></td>   
                    <td><h6>{s.recommendations}</h6></td>   
                         
                  </tr>

                )
              })
            }
            </tbody>
            </table>
                

</div>

);

}



