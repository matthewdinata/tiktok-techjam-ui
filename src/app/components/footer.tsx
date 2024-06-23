import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";

export default function Footer() {
	return (
		<div className="w-full h-16 px-6 bg-black flex justify-between items-center text-gray-200 text-2xl">
			<div className="flex flex-col justify-center items-center">
				<AiOutlineHome />
				<span className="text-xs">Home</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<AiOutlineShopping />
				<span className="text-xs">Shop</span>
			</div>
			<div className="bg-white px-2 py-1 mb-1 rounded-md text-black shadow-[-5px_0_0_cyan,5px_0_0_#FF0066] ">
				<FaPlus fontSize={18} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<MdOutlineChat />
				<span className="text-xs">Inbox</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<CgProfile />
				<span className="text-xs">Profile</span>
			</div>
		</div>
	);
}
