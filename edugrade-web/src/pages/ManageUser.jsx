import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Email", "Mobile", "Role", "Action"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        email: "jhon@gmail.com",
        mobile: "0773173627",
        role: "learner"
    },
    {
        name: "John Michael",
        email: "jhon@gmail.com",
        mobile: "0773173627",
        role: "learner"
    },
    {
        name: "John Michael",
        email: "jhon@gmail.com",
        mobile: "0773173627",
        role: "learner"
    },
    {
        name: "John Michael",
        email: "jhon@gmail.com",
        mobile: "0773173627",
        role: "learner"
    },
];

export const ManageUser = () => {
    return (
        <div className="mt-20 grid place-items-center">
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
                        {TABLE_ROWS.map(({ name, email, mobile, role }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
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
                                            Edit
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