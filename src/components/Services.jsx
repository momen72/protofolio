export default function Services() {
    const services = [
        {
            name: 'Web design',
            icon: '../assets/New folder/web-icon.png',
            description: 'The process of designing websites, combining UI, UX, and content structure to create functional and attractive web pages.',
            link: 'https://github.com/momen72',
            showButton: true,
        },
        {
            name: 'UI/ UX design',
            icon: '../assets/New folder/ui-icon.png',
            description: 'UI Design (User Interface):The visual design of a product’s interface, including colors, buttons, typography, and layout. UX Design (User Experience):The overall experience a user has while interacting with a product, focusing on usability, efficiency, and satisfaction.',
            link: 'https://www.behance.net/gallery/228679723/Tabibi',
            showButton: true,
        },
        {
            name: 'Graphics design',
            icon: '../assets/New folder/graphics-icon.png',
            description: 'The art of creating visual content (such as logos, posters, and social media graphics) to communicate ideas effectively.',
            link: 'https://www.behance.net/moemenelroweny',
            showButton: true,
        }
    ];
    return (
        <div id="services" className='pt-28 bg-black text-white flex flex-col items-center bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat pb-10 '>
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Graphic designer from Damanhour , Behaira with 3 years of experience in multiple companies and I am looking forward to being a frontend developer</p>

            <div className="flex flex-wrap md:gap-7 my-10 mx-6 md:mx-20 w-fit justify-center">
                {services.map((service) => (
                    <div key={service.name} className="bg-black border border-gray-300 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 duration-500 hover:bg-darkHover hover:shadow-emerald-400 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-white">{service.name}</h3>
                        <p className="text-sm  leading-5 w-75 text-white/80">{service.description}</p>
                        {service.showButton && 
                        <a href={service.link}  className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r bg-[#A6FF5D] bg-[#73ff00] py-3 px-8 rounded-full text-black">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="black" />
                        </svg>
                    </a>}
                        
                        {/* <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a> */}
                    </div>
                ))}
            </div>
        </div>
    )
}