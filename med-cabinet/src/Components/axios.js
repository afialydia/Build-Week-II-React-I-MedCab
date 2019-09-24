//NEEDS API URL
//axios request
//UPDATE RES.DATA.WHATEVER
//CONFIRM RENDER



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RecCards from "./RecCards";


// const Axios = () => {

//   const [state, setState] = useState([]);

//   useEffect(() => {
//     axios
//     .get(INSERT API URL)
//     .then(res => {
//       const recData = res.data;
//       console.log(recData);
//       setState(recData);
//     // console.log(res.data);
//     }, [])
//     .catch(error => {
//       console.log(error);
//     })
//   }, []);

//   return (
//     <section className="recs-list">
//       {state.map(data => {
//           return (
//             <RecCards 
//                 name={data.name}
//             //   key={data.id}
//             //   id={data.id}
//             //   strain={data.strain}
//             //   effect={data.effect}
//             />
//           )
//       })}
//     </section>
//   );
// }

// export default Axios;