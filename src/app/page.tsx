import Footer from "./components/footer";
import VideoContainer from "./components/video-container";

export default async function HomePage() {
	return (
		<div className="h-full">
			<div className="fixed top-0 left-0 w-full h-[calc(100vh_-_64px)]">
				<VideoContainer
					src="/assets/home-vid.mp4"
					name="Mr. Do You Know?"
					caption="air fryer users are the worst people on earth 🤷‍♂️"
					tags={["#airfryer", "#comedy"]}
					music="original sound - Mr. Do You Know?"
				/>
			</div>
			<div className="fixed bottom-0 w-full">
				<Footer />
			</div>
		</div>
	);
}
