import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChallengesTable = ({ challenges }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Challenge Name</th>
          <th>Difficulty</th>
          <th>Points</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {challenges.map((challenge) => (
          <tr key={challenge.id}>
            <td>{challenge.name}</td>
            <td>{challenge.difficulty}</td>
            <td>{challenge.points}</td>
            <td>{challenge.completed ? "Yes" : "No"}</td>
            <td>
              <Link to={challenge.path}>
                <Button variant="primary" size="sm">
                  Start Challenge
                </Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ChallengesTable;