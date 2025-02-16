import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export default function HomeCard() {
    const items = [
        {
            title: 'Clients',
            description: '25 historic clients, 6 of them are active'
        },
        {
            title: 'Projects',
            description: 'You have 8 active'
        },
        {
            title: 'Tasks',
            description: 'You have 12 pending tasks'
        },
        {
            title: 'Revenue',
            description: '$3500 is the revenue of the month'
        }
    ];

    return (
        <div className="flex flex-row justify-start items-center gap-7 flex-wrap">
            {items.map((item) => {
                return (
                    <Link href={`/home/${item.title.toLowerCase()}`} key={item.title} className="w-[250px] h-[100px]">
                        <Card key={item.title} >
                            <CardHeader>
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                )
            })}
        </div >
    )
}
