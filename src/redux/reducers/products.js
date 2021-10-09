const initialState = [
  {
    id: Math.random().toString(16).slice(-4),
    image: "https://picsum.photos/200/300",
    name: " Aamvatari Ras",
    description: "deassd",
    price: "12",
    inventoryDate: "" + new Date().toLocaleString(),
  },
  {
    id: Math.random().toString(16).slice(-4),
    image: "https://picsum.photos/200/300",
    name: " Patanjali Gonyle Floor Cleaner ",
    description: "this Gonyle Floor Cleaner",
    price: "342",
    inventoryDate: "" + new Date().toLocaleString(),
  },
  {
    id: Math.random().toString(16).slice(-4),
    image: "https://picsum.photos/200/300",
    name: " Patanjali Madhuram Sugar (Jaggery Powder)",
    description: "deassd",
    price: "657",
    inventoryDate: "" + new Date().toLocaleString(),
  },
  {
    id: Math.random().toString(16).slice(-4),
    image: "https://picsum.photos/200/300",
    name: "100% Pure Virgin Coconut oil 500ml Combo (pack of 2)- Rs 65 Off",
    description: "deassd",
    price: "783",
    inventoryDate: "" + new Date().toLocaleString(),
  },
  {
    id: Math.random().toString(16).slice(-4),
    image: "https://picsum.photos/200/300",
    name: "Aastha  Dhoop Tathastu",
    description: "deas as dasd",
    price: "42",
    inventoryDate: "" + new Date().toLocaleString(),
  },
];
export default function products(state = initialState, action) {
  console.log(action, "action");
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        {
          id: Math.random().toString(16).slice(-4),
          image: "https://picsum.photos/200/300",
          name: action.product.name,
          description: action.product.dec,
          price: action.product.price,
          inventoryDate: "" + new Date().toLocaleString(),
        },
        ...state,
      ];
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
}
