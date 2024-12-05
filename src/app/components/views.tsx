import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faDollarSign,
  faShoppingBag,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

type StatBoxProps = {
  icon: any;
  value: string;
  description: string;
  bgColor?: string;
};

function StatBox({ icon, value, description, bgColor = "bg-black" }: StatBoxProps) {
  return (
    <div className="shadow-lg border-2 rounded-md hover:bg-red-500 w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
      <span className={`${bgColor} rounded-full text-white p-3`}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </span>
      <span className="text-xl font-bold">{value}</span>
      <p className="text-xs md:text-sm text-center">{description}</p>
    </div>
  );
}

function Views() {
  const stats = [
    { icon: faStore, value: "10.5k", description: "Sellers active on our site" },
    { icon: faDollarSign, value: "33k", description: "Monthly Product Sale" },
    { icon: faShoppingBag, value: "45.5k", description: "Customers active on our site" },
    { icon: faMoneyBill1Wave, value: "25k", description: "Annual Gross Sale" },
  ];

  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="w-full md:w-[80%] border-b-2 border-neutral-100 pb-10">
        <div className="flex flex-wrap gap-5 justify-center md:justify-between mt-5">
          {stats.map((stat, index) => (
            <StatBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Views;
