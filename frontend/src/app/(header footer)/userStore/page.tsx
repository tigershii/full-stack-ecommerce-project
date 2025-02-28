import { getUserItems } from "@/lib/api/items";
import ItemCardCheckout from "@/components/(items)/ItemCardCheckout";
import { Item } from "@/types/item";
import CreateItemMenu from "@/components/(items)/createItemMenu";

export default async function Store() {
  let items = [];
  let hasError = false;

  try {
    //items = await getUserItems("1");
    items = [{id: "1", title: "Item 1", price: 100, description: "Description 1", images: ["/moon.svg"], sellerId: "1"}, {id: "2", title: "Item 2", price: 200, description: "Description 2", images: ["/moon.svg"], sellerId: "2"}]
  } catch (error) {
    console.error("Failed to fetch user items:", error);
    hasError = true;
  }

  if (hasError) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Your Listings</h1>
        <p className="text-md mb-4">Unable to load your items at this time, please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Listings</h1>
        <CreateItemMenu/>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-1/2">
          {items.length > 0 ? (
            items.map((item: Item) => (
              <ItemCardCheckout key={item.id} item={item} />
            ))
          ) : (
            <p>You don&apos;t have any active listings.</p>
          )}
        </div>
      </div>
    </div>
  );
}