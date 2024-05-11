import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Name", "Email", "Mobile", "Role", "Action"];
export const ManageUser = () => {

    const [users,setUsers] = useState([])
    console.log(users)
    
    const getUsers = async() => {
        await axios.get('http://localhost:8001/api/user/allProfiles')
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        getUsers()
    },[])

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div className="mt-10 grid place-items-center">
                <Typography className="font-bold text-xl mb-4">User management</Typography>
            <Card className="h-full w-4/6 overflow-scroll mt-4">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ name, email, mobile, role,_id }, index) => {
                            const isLast = index === users.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {mobile}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            {role}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium cursor-pointe text-neutral-950"
                                        >
                                            <Trash2 color="red" onClick={() => handleDelete(_id)}/>
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}