import React from "react";
import data from "./Components/index.json"

const Table = () =>
{
    const Tstyle = {
        border: "2px solid black"
    }

    return(
        <table>
            <thead style={Tstyle}>
                <tr>
                    <th rowSpan={3}>ID</th>
                    <th rowSpan={3}>Name</th>
                    <th rowSpan={3}>Designation</th>
                    <th rowSpan={3}>Skills</th>
                    <th colSpan={7}>Projects</th>
                </tr>
                <tr>
                    <th rowSpan={2}>Name</th>
                    <th rowSpan={2}>Description</th>
                    <th colSpan={2}>Team</th>
                    <th colSpan={3}>Tasks</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((items) => (
                    <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.designation}</td>
                        <td>
                            <ul>
                                {items.skills.map((skills) => (
                                    <li key={skills}>{skills}</li>
                                ))}
                            </ul>
                        </td>
                        <td>{items.projects.name}</td>
                        <td>{items.projects.description}</td>
                        <td>{items.projects.team.name}</td>
                        <td>{items.projects.team.role}</td>
                        <td>{items.projects.tasks.id}</td>
                        <td>{items.projects.tasks.name}</td>
                        <td>{items.projects.tasks.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table