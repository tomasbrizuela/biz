import TableClients from "./table";

export default function Client() {
    return (
        <div className="flex flex-col justify-start items-start h-screen gap-7 p-10">
            <h1 className="font-bold text-4xl">
                Clients
            </h1>
            <div className="flex flex-col justify-center items-center w-full h-screen gap-7">
                <TableClients></TableClients>
            </div>
        </div>
    )
}