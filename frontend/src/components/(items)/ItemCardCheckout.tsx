'use client';
import { Item } from "@/types/item";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { useCartActions } from "@/store/reducers/cartReducer";

export default function ItemCardCheckout({item} : {item: Item}) {
    const { id, name, price, images } = item;
    const { removeItemCart } = useCartActions();
    
    const imageUrl = images && images.length > 0 ? images[0] : "/placeholder.png";
    
    return (
        <Link href={`/item/${id}`}>
            <div className="container mx-auto align-items mb-4">
                <Card className="dark:bg-secondary-dark">
                    <CardContent className="p-2">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="w-full pt-[100%] relative">
                                <div className="absolute inset-0">
                                    <Image 
                                        src={imageUrl}
                                        alt={name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain"
                                        priority={true}
                                    />
                                </div>
                            </div>

                            <div className="pl-4">
                                <h1 className="text-md mb-2 text-black dark:text-white line-clamp-5">{name}</h1>
                                <p className="text-md text-black dark:text-white">Price: ${price.toFixed(2)}</p>
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        removeItemCart(item.id);
                                    }} 
                                    className="w-full text-sm underline text-black dark:text-white py-2 text-left"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Link>
    )
}