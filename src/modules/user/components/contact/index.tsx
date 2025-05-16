import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { useGetProfileQuery } from "store/user/userAPI";

const SOCIAL_ICONS: Record<string, IconType> = {
	linkedin: FaLinkedin,
	github: FaGithub,
};

export const Contact = () => {
	const { data } = useGetProfileQuery();

	return (
		<div className='bg-stone-950'>
			<div className='container mx-auto p-14 flex flex-col space-y-8'>
				<div className='flex flex-row space-x-20'>
					<div className='flex flex-col space-y-2'>
						<h3 className='font-semibold text-lg'>REACH ME</h3>
						{/* <div className='flex flex-row items-center space-x-2'>
              {isLoading && <span>Loading...</span>}
              {isError && <span>Error loading email</span>}
              {profile && (
                <>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  <FaArrowRight size={12} />
                </>
              )}
            </div> */}
					</div>
					<div className='flex flex-col space-y-2'>
						<h3 className='font-semibold text-lg'>SOCIAL</h3>
						<div className='flex flex-row space-x-4 text-2xl'>
							{data?.data[0].social?.map((item, idx) => {
								const Icon = SOCIAL_ICONS[item.app_name.toLowerCase()];
								return (
									<a
										key={idx}
										href={item.link}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={item.app_name}
									>
										{Icon ? <Icon /> : item.app_name}
									</a>
								);
							})}
						</div>
					</div>
				</div>
				<div className='flex flex-col space-y-4'>
					<div className='border border-stone-800'></div>
					<div className='flex flex-row justify-end items-center space-x-4 text-sm text-stone-800'>
						<FaRegCopyright size={10} />
						<p>Mabaryok</p>
					</div>
				</div>
			</div>
		</div>
	);
};
