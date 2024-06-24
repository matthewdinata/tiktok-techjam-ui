import { AiOutlineHome, AiOutlineShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineChat } from "react-icons/md";

import UploadModal from "./upload-modal";

export default function Footer() {
	return (
		<div className="w-full h-16 px-6 bg-black flex justify-between items-center text-neutral-200 text-2xl">
			<div className="flex flex-col justify-center items-center">
				<AiOutlineHome />
				<span className="text-xs">Home</span>
			</div>
			<div className="flex flex-col justify-center items-center">
				<AiOutlineShopping />
				<span className="text-xs">Shop</span>
			</div>
			<UploadModal />
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
