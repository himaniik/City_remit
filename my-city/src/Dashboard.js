// import React from 'react'

// export default function Dashboard() {
//   return (
//     <div style={{backgroundColor:"rgb(234,234,234"}}>
//       <div className="main" >
//   <nav className="navbar" style={{ backgroundColor: "rgb(16, 186, 198)" }}>
//     <div className="container-fluid">
//       <img src="https://www.mcb.com.mm/wp-content/uploads/2019/06/ct-japan-da6a4250.png" style={{ height: 40, marginLeft: 20 }} />
//       <img src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png" style={{ height: 30, marginLeft: 800}} />
//       <span style={{ color: "white" }}>Krishna Prasad Timilsina</span>
//     </div>
//   </nav>
//   <p style={{ marginLeft: 118, marginTop: 20, fontSize: 18 }}>Dashboard</p>
//   <div
//     className="container"
//     style={{ display: "flex", justifyContent: "space-between" }}
//   >
//     <fieldset
//       style={{
//         backgroundColor: "white",
//         width: 150,
//         height: 200,
//         borderRadius: 10
//       }}
//     >
//       <div className="icon">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Noun_Project_pie_chart_icon_1379121_cc.svg/155px-Noun_Project_pie_chart_icon_1379121_cc.svg.png" style={{ width: 50, margin: "20px 0 0 50px" }} />
//         <hr />
//         <h5 style={{ font: "bold", margin: "20px 0 0 45px" }}>61.18M</h5>
//       </div>
//     </fieldset>
//     <fieldset
//       style={{
//         backgroundColor: "white",
//         width: 150,
//         height: 200,
//         borderRadius: 10
//       }}
//     >
//       <div className="icon">
//         <h5 style={{ font: "bold", margin: "40px 0 0 65px" }}>7</h5>
//         <hr style={{ marginTop: 20 }} />
//         <img src="https://cdn-icons-png.flaticon.com/512/4458/4458569.png" style={{ width: 50, margin: "0px 0 0 50px" }} />
//       </div>
//     </fieldset>
//     <fieldset
//       style={{
//         backgroundColor: "white",
//         width: 150,
//         height: 200,
//         borderRadius: 10
//       }}
//     >
//       <div className="icon">
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABhYWHPz8/BwcH09PTLy8u9vb2WlpbHx8fCwsLR0dHq6urt7e3JyckYGBiMjIyfn58WFhYiIiLl5eU4ODhzc3Pf398nJycICAgPDw9ZWVmmpqbY2NgdHR2ampqwsLB9fX09PT1FRUVNTU1qamqHh4cwMDBE17k0AAAEQ0lEQVR4nO2c61biMBRGi1guggOCCIIoOjK+/xtOKwUtSU5Omja39e1/CqvNbr6T9BKaZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBwpoenG1Peb3Pfzebz3mvE7MF3w5msm/mVrKLoxsfmgpEormwMe0++m6/nYCXY6018C2jZWBoefQvosKrCb3wb6BhbG059K2i4tTYMvRDvrA37vhU07JM3zNI3HCVvmCdvaD3WhG9oe94WgWG2/0jdsEjq0+pZIbBQfRCXYUEuR1+m0Rgq6CeSUiUDrWDkhvoejNxwwhCM2pAR0bgNeYIRG7IiGrMhZ5CJ2pAZ0XgN2T0YqyG3BqM15Ec0UkO14HaXhCFRg5OHFAwpQdl9q+gMiRrsS+/MxWZICA4yj4bTwbjfytNYYpooBX0ZPiy/d/X31npLZA2WeDGczC47+7y325Qmopkfw+HvvS0ebTZF9GAl6MPw6vmfjSJRgxcL94biA87GivQ0UeHccCju8LmhIiH45+dbrg0lgk2DqpsmKhwbKp7BzxooEoNMzcCtobQHS7bGivpposKpoVKwUDRcAcKrwZKT4e5lv15PRh/dGpLLRF6NFJk1WFIarvbnv4ZdGmrWwZgMN6xpomJUX6uXrzozJCJ6gl+L/IhmpWF9HVu+6chQK1iMqMygEqPoWPz26HoZ26QbQ9ZSLV4tGtRgyfzl+j83sq/ZwlyLxgkqe5qomAtXoWNJT9vCiGilqO1FQlDe8DvhP3n7K/fYgr3eUqNIRFTRM5ILUMtrUhGj5ZJ0LRKDjDiKOsOgB0uoEdU4ok4wFCwUlSEymyZc0WBF71KhaF6DLiAE35WfyGvR6EzGGUREB5nkiUKFrBajq8HysKsVxaBGV4On0483tiJRgx4jSgiez33VvfhaU4wyoid4ioSgeFLmDKIHf+dKrbi5KBIRDVOwfgmgr8UwBxlymqijUwwzooSgeNhpRaIH7Z/NNYaIqCxX6p+IbPLoalB+i0Tdi69mx8oRrGmijlpRiceIGtXgGWPFeGrwjOHPtcKsQfoE0kgxzGlC1yoDxTAjqj/sbMUwBTljO1MxzIjyJi+WYpjTBPewMxTDjCg/V3OdYIzTRB1NL4ZZg2atIhWHHbWeQSsRPUEENQ1BQjHMUbTJNY5C0WMPEoLNDrtUMcyINs3Vv1gEm4/tgmKYNWjTqqugplSDZ+btbcqKDmrwzM+x+1q30lbLVgi0cCvs8LnZbr+OHs/UuovohWnrK0OMICLqcWRokQ5rMAyI++1pCObq1xemEdHsJXVB9UtE04go8UqxVHpQ+eAyGUHVy5jSEVS8nzGVGiyR1mFCPVggeVdBWoKSs+7EBMVOTE4wu18kLlhcu/1W9HmZ2iGXO2I7vxeqHTI9HHe745vH+ygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgE/4D+6suem6LQSgAAAAASUVORK5CYII="
//           style={{ width: 50, margin: "20px 0 0 50px" }}
//         />
//         <hr style={{ marginTop: 12 }} />
//         <h5 style={{ font: "bold", margin: "30px 0 0 45px" }}>14.14M</h5>
//       </div>
//     </fieldset>
//     <fieldset
//       style={{
//         backgroundColor: "white",
//         width: 150,
//         height: 200,
//         borderRadius: 10
//       }}
//     >
//       <div className="icon">
//         <h5 style={{ font: "bold", margin: "40px 0 0 45px" }}>734.19</h5>
//         <hr style={{ marginTop: 20 }} />
//         <img src="data:image/png;base64,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" style={{ width: 50, margin: "10px 0 0 45px" }} />
//       </div>
//     </fieldset>
//     <fieldset style={{ backgroundColor: "white", width: 250, height: 200 }} />
//   </div>
// </div>

//     </div>
//   )
// }
import { useState, useEffect } from "react";
import axios from "./request/axios";
// import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
export default function Dashboard() {
  const [summary, setSummary] = useState([]);
  const [country, setCountry] = useState([]);
  const [tran, setTran] = useState([]);
  const [tic, setTic] = useState([]);
  const [line, setLine] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    async function getSummary() {
      await axios
        .get("transaction-manager/v1/admin/dashboard/summary", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("cityremit-token")
          }
        })
        .then((res) => {
          setSummary(res.data.data[0]);
        })
        .catch((e) => {
          nav("/");
        });
    }

    async function getCountry() {
      await axios
        .get("config/v1/admin/masters/country", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("cityremit-token")
          }
        })
        .then((res) => {
          setCountry(res.data.data);
        })
        .catch((e) => {
          nav("/");
        });
      }


    async function getTransaction() {
      await axios
        .post("transaction-manager/v1/admin/dashboard/search", null, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("cityremit-token")
          }
        })
        .then((res) => {
          setTran(res.data.data);
        })
        .catch((e) => {
          nav("/");
        });
    }
    async function getTicket() {
      await axios
        .post("config/v1/tickets/search", null, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("cityremit-token")
          }
        })
        .then((res) => {
          setTic(res.data.data.data);
        })
        .catch((e) => {
          nav("/");
        });
    }
    getTicket();
    getTransaction();
    getSummary();
    getCountry();
  }, []);

  return (
    <div>
      <div className="main" style={{ backgroundColor: "rgb(234, 234, 234)" }}>
        <nav
          className="navbar"
          style={{ backgroundColor: "rgb(16, 186, 198)" }}
        >
          <div className="container-fluid">
            <img
              src="https://jp-dev.cityremit.global/static/media/city-express-icon-logo.7b8cd46f.png"
              style={{ height: 40, marginLeft: 20 }}
            />
            <img
              src={localStorage.getItem("cityremit-user-image")}
              style={{ height: 40, marginLeft: 850 }}
            />
            <span style={{ color: "white" }}>Krishna Prasad Timilsina</span>
          </div>
        </nav>
        <p style={{ marginLeft: 118, marginTop: 20, fontSize: 18 }}>
          Dashboard
        </p>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <fieldset
            style={{
              backgroundColor: "white",
              width: 150,
              height: 200,
              borderRadius: 10
            }}
          >
            <div className="icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Noun_Project_pie_chart_icon_1379121_cc.svg/103px-Noun_Project_pie_chart_icon_1379121_cc.svg.png"
                style={{ width: 50, margin: "20px 0 0 50px" }}
              />
              <hr />
              <h5 style={{ font: "bold", margin: "20px 0 0 45px" }}>
                {summary.transaction_volume}
              </h5>
            </div>
          </fieldset>
          <fieldset
            style={{
              backgroundColor: "white",
              width: 150,
              height: 200,
              borderRadius: 10
            }}
          >
            <div className="icon">
              <h5 style={{ font: "bold", margin: "40px 0 0 65px" }}>
                {summary.new_customers}
              </h5>
              <hr style={{ marginTop: 20 }} />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/New_user_icon-01.svg/512px-New_user_icon-01.svg.png"
                style={{ width: 50, margin: "0px 0 0 50px" }}
              />
            </div>
          </fieldset>
          <fieldset
            style={{
              backgroundColor: "white",
              width: 150,
              height: 200,
              borderRadius: 10
            }}
          >
            <div className="icon">
              <img
                src="https://pics.freeicons.io/uploads/icons/png/8471584441553857633-512.png"
                style={{ width: 50, margin: "20px 0 0 50px" }}
              />
              <hr style={{ marginTop: 12 }} />
              <h5 style={{ font: "bold", margin: "30px 0 0 45px" }}>
                {summary.total_receivable}
              </h5>
            </div>
          </fieldset>
          <fieldset
            style={{
              backgroundColor: "white",
              width: 150,
              height: 200,
              borderRadius: 10
            }}
          >
            <div className="icon">
              <h5 style={{ font: "bold", margin: "40px 0 0 45px" }}>
                {summary.fx_gain}
              </h5>
              <hr style={{ marginTop: 20 }} />
              <img
                src="https://banner2.cleanpng.com/20180203/ode/kisspng-dollar-sign-icon-dpllar-sign-5a75cb480c19c2.8590531415176691920496.jpg"
                style={{ width: 60, margin: "0px 0 0 45px" }}
              />
            </div>
          </fieldset>
          <fieldset
            style={{ backgroundColor: "white", width: 250, height: 200 }}
          />
        </div>
        <div className="dropdown">
          <label> Country</label>
          <select>
            {country.map((c)=>{
              return (
              <option>{c.label}</option>
              )
            })

            }
            
          </select>
        </div>
      </div>
      
      <main style={{ backgroundColor: "rgb(234, 234, 234)" }}>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sender Full Name</th>
              <th scope="col">Receiver Full Name</th>
              <th scope="col">Current Status</th>

              <th scope="col">Send Amount</th>
              <th scope="col">Receive Amount</th>
            </tr>
          </thead>
          <tbody>
            {tran.map((a) => (
              <tr class="table-secondary">
                <td>{a["Sender Full Name"]}</td>
                <td>{a["Receiver Full Name"]}</td>
                <td>{a["Current Status"]}</td>

                <td>{a["Send Amount"]}</td>
                <td>{a["Receive Amount"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ticket_id</th>
              <th scope="col">ticket_category</th>
              <th scope="col">ticket_status</th>

              <th scope="col">ticket_priority</th>
              <th scope="col">assign_to</th>
            </tr>
          </thead>
          <tbody>
            {tic.map((a) => (
              <tr class="table-secondary">
                <td>{a["id"]}</td>
                <td>{a["ticket_category"]}</td>
                <td>{a["ticket_status"]}</td>

                <td>{a["ticket_priority"]}</td>
                <td>{a["assign_to"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}