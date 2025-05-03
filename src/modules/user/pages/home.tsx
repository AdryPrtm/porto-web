import { Contact } from "modules/user/components/contact";
import { Interest } from "modules/user/components/interest";
import { Navigation } from "modules/user/components/navigation";
import Aurora from "modules/user/utils/aurora";
import { IntroFeatures } from "../features/intro";
import { CertificateFeatures } from "../features/certif";
import { ProjectFeatures } from "../features/project";

export const HomeRoute = () => {
	return (
		<div className='w-full bg-black text-gray-200'>
			<div className='absolute inset-0 z-0 w-full'>
				<Aurora
					colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
					speed={0.5}
					bottomColor='#0C0A09'
				/>
			</div>
			<div className='flex flex-col space-y-8'>
				<div className='relative container mx-auto min-h-screen'>
					<div className='relative flex flex-col space-y-20 min-h-screen'>
						<div className='sticky top-0 z-20 my-2'>
							<Navigation />
						</div>
						<IntroFeatures />
						<Interest />
						<div className='flex flex-row justify-center'>
							<div className='bg-black p-8 rounded-lg w-2xl mx-auto'>
								<h2 className='text-white text-2xl font-bold mb-6'>
									EXPERIENCE
								</h2>
								<ProjectFeatures />
							</div>
							<div className='bg-black p-8 rounded-lg w-2xl mx-auto'>
								<h2 className='text-white text-2xl font-bold mb-6'>PROJECTS</h2>
								<ProjectFeatures />
							</div>
						</div>
						<CertificateFeatures />
					</div>
				</div>
				<div id='contact'>
					<div className='h-20 bg-gradient-to-b from-black to-stone-950'></div>
					<Contact />
				</div>
			</div>
		</div>
	);
};
