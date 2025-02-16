import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Dot, DotIcon } from "lucide-react";

const clients = [
    { name: "Juan Pérez", email: "juan.perez@example.com", status: "active", created: "2025-01-01" },
    { name: "María López", email: "maria.lopez@example.com", status: "inactive", created: "2024-11-15" },
    { name: "Carlos García", email: "carlos.garcia@example.com", status: "active", created: "2025-01-10" },
    { name: "Ana Martínez", email: "ana.martinez@example.com", status: "active", created: "2025-02-05" },
    { name: "Luis Rodríguez", email: "luis.rodriguez@example.com", status: "inactive", created: "2024-12-20" },
    { name: "Elena Torres", email: "elena.torres@example.com", status: "active", created: "2025-01-25" },
    { name: "Miguel Sánchez", email: "miguel.sanchez@example.com", status: "active", created: "2025-02-02" },
    { name: "Laura Ramírez", email: "laura.ramirez@example.com", status: "inactive", created: "2024-10-30" },
    { name: "Fernando Díaz", email: "fernando.diaz@example.com", status: "active", created: "2025-01-20" },
    { name: "Sofía Herrera", email: "sofia.herrera@example.com", status: "active", created: "2025-02-10" }
];

export default function TableClients() {
    return (
        <Table>
            <TableCaption>A list of all your clients.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead >Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    clients.map((client) => {
                        let { email, name, status, created } = client;
                        status = client.status[0].toUpperCase() + client.status.slice(1);
                        return (
                            <TableRow key={email}>
                                <TableCell>{name}</TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell >
                                    {
                                        status == "Active" ? <div className="flex items-center space-x-2 bg-green-100 w-fit rounded ps-2 pe-2">
                                            <span className="w-1 h-1 rounded-full bg-white"></span>
                                            <p className="p-0 text-green-800">{status}</p>
                                        </div> : <div className="flex items-center space-x-2 bg-gray-100 w-fit rounded ps-2 pe-2">
                                            <span className="w-1 h-1 rounded-full bg-white"></span>
                                            <p className="p-0 text-gray-700">{status}</p>
                                        </div>
                                    }
                                </TableCell>
                                <TableCell >{created}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}
