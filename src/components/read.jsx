import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeView({ employees }) {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return (
      <div className="mt-4">
        <h2 style={{ textAlign: "center" }}>Employee not found</h2>

        <Link
          to="/employee-details"
          className="btn btn-primary ms-3 mt-3 ps-4 pe-4"
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="d-flex w-100 vh-50 justify-content-center align-items-center mt-5">
      <div className="w-50 border bg-white shadow px-5 pt-4 pb-5  mb-5rounded responsive-sm">
        <h2 className="text-2xl font-bold mb-4 text-info">
          {employee.name}'s Details
        </h2>
        <h5 className="mb-4">
          <strong>ID :</strong> {employee.id}
        </h5>
        <h5 className="mb-4">
          <strong>Email :</strong> {employee.email}
        </h5>
        <h5 className="mb-4">
          <strong>Phone :</strong> {employee.phone}
        </h5>
        <h5 className="mb-4">
          <strong>Department :</strong> {employee.role}
        </h5>

        <h5 className="mb-4">
          <strong>Available Leaves:</strong> {employee.remainingLeaves}
        </h5>

        <ul>
          {employee.leaveHistory?.length > 0 ? (
            employee.leaveHistory.map((leave, index) => (
            <h5 className="text-success" key={index}>
             Leave Date= {leave.startDate} to {leave.endDate} . Totally {leave.days} days Off
              
            </h5>
            

          ))):(
            <h3 className="text-success font-bold">No leave history available</h3>
          )
        }
        </ul>
        <Link
          to="/employee-details"
          className="btn btn-primary ms-3 mt-3 ps-4 pe-4"
          style={{ textAlign: "center" }}
        >
          Back to Employee Details
        </Link>
      </div>
    </div>
  );
}

export default EmployeeView;
