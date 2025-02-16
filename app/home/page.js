import HomeCard from "@/components/ui/created/homeCards.js";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <div className="flex flex-col justify-start items-center h-80 gap-7 p-10">
            <div className="flex flex-col justify-start items-start w-full">
                <h1 className="font-bold text-4xl">Welcome to your dashboard, Tomás!</h1>
            </div>
            <div className="flex flex-col justify-center items-start w-full">
                <Separator />
            </div>
            <div className="flex flex-col justify-center items-start w-full">
                <HomeCard />
            </div>
        </div>
    )
}