import SectionHeader from "../ui/SectionHeader";


function Pricing() {
  const bonanzaItems = [
    'Resolve critical issues in real-time for immediate impact, streamed live on X, YouTube, and Twitch. ',
    'Real-time testing and live insights for immediate adjustments from a panel of 6-8 experts.',
    'Optimize visuals and layout with direct feedback from experts.',
    'Optimize visuals, user journey, and layout with direct feedback from top-tier experts.',
    'In-depth analysis comparing your app to competitors, focusing on key areas of usability and design. ',
    'Feature requests tailored to enhance your app\'s potential and user engagement.',
    'Comprehensive summary and actionable recommendations delivered post-session.',
    'Sentiment Analysis for each power-user on the panel. ',
    'Mobile-only dApps will be reviewed in collaboration with the official Solana SAGA DAO. ',
  ];

  const bonanzaPlusItems = [
    'Resolve critical issues in real-time for immediate impact, streamed live on X, YouTube, and Twitch. ',
    'Real-time testing and live insights for immediate adjustments from a panel of 6-8 experts.',
    'Optimize visuals and layout with direct feedback from experts.',
    'Optimize visuals, user journey, and layout with direct feedback from top-tier experts.',
    'In-depth analysis comparing your app to competitors, focusing on key areas of usability and design. ',
    'Feature requests tailored to enhance your app\'s potential and user engagement.',
    'Comprehensive summary and actionable recommendations delivered post-session.',
    'Sentiment Analysis for each power-user on the panel. ',
    'Mobile-only dApps will be reviewed in collaboration with the official Solana SAGA DAO. ',
  ];

  const deepDiveItems = [
    'Feedback Bonanza and PLUS features included!',
    'Comprehensive 2-week review by a diverse team, including Solana Hackathon Judges, UX/UI experts, Solana power users, blind testers, and more!',
    'Actionable feature requests, UX/UI improvements, and user-journey adjustments for maximum usability. ',
    'In-depth competition analysis and Go-To-Market recommendations to elevate your app\'s position. ',
    'Governance structure insights and DAO advice to align your project with community goals. ',
    'Expert recommendations on tokenomics and distribution strategies for sustainable growth. ',
    'Static code analysis to identify and address common security pitfalls, in collaboration with Sec3. ',
    'Delivered in collaboration with the University of Waterloo Blockchain Club to bring diverse perspectives and innovative ideas. ',
    'All findings and recommendations compiled into a detailed, professional-grade report.',
  ];


	return (
    <div className="w-screen lex flex-col justify-center items-center text-white relative">
      <SectionHeader title="Pricing" isLeft={false} />
			<div className="flex flex-col items-center p-10">
        <h4 className="text-white text-2xl font-bold mb-4">Plans that fit your <span className="font-light font-editorial-new">scale</span></h4>
			  <h5>No additional fees or hidden costs.</h5>
			</div>
    
      <div className="flex flex-col p-8 items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
    {/* Feedback Bonanza */}
          <div className="bg-[#1a0d2d] text-white p-6 shadow-lg flex flex-col h-full card-animated-border">
      <h2 className="text-xl font-bold mb-4">Feedback Bonanza</h2>
      <p className="text-sm mb-4">
      Live expert feedback on X, YouTube, and Twitch to optimize your dApp.
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">

              {bonanzaItems.map((item, index) => (
                <li className="flex items-start" key={index}>
                  <img src={index <= 5 ? "/images/list-item-ind.svg" : "/images/list-item-ind2.svg"} alt="" className="w-6 h-6 mr-2" />
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6 mt-20" />
      <div className="mt-auto flex flex-col md:flex-row md:justify-center items-center">
        <p className="text-3xl font-bold">
          $999 <span className="text-sm">per session</span>
        </p>
        <a href="https://discord.gg/deanslist" target="blank"  rel="noopener noreferrer" className="w-full"><button className="bg-[#70328F] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4  md:ml-10 w-full md:w-fit">
          Get Started
        </button>
        </a>
      </div>
    </div>

    {/* Feedback Bonanza PLUS */}
          <div className="bg-purple-900 text-white p-6 shadow-lg flex flex-col h-full card-animated-border relative">
          <div className="absolute top-7 right-1.5 bg-purple-700 text-xs font-bold px-2 py-1 rounded-full  ">
        Most Popular
      </div>
      <h2 className="text-xl font-bold mb-4 pr-24">Feedback Bonanza PLUS </h2>
      <p className="text-sm mb-4">
      Live on X, YouTube, and Twitch, get professional reviews and a detailed report.
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
      <ul className="space-y-2 text-sm">
              {bonanzaPlusItems.map((item, index) => (
                <li className="flex items-start" key={index}>
                  <img src="/images/list-item-ind.svg" alt="" className="w-6 h-6 mr-2" />
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6 mt-20" />
      <div className="mt-auto flex flex-col md:flex-row md:justify-center items-center">
        <p className="text-3xl font-bold">
          $1499 <span className="text-sm">per session</span>
        </p>
        <a href="https://discord.gg/deanslist" target="blank"  rel="noopener noreferrer" className="w-full"><button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 md:ml-7 w-full md:w-fit">
          Get Started
        </button>
        </a>
      </div>
    </div>

    {/* Deep Dive Assessment */}
          <div className="bg-[#1a0d2d] text-white p-6 shadow-lg flex flex-col h-full card-animated-border">
      <h2 className="text-xl font-bold mb-4">
        Deep Dive Assessment{" "}
        <span className="bg-purple-700 text-xs font-bold px-2 py-1 rounded-full ">
          Exclusive
        </span>
      </h2>
      <p className="text-sm mb-4">
      The ultimate 2-week review package for dApps on Solana, crafted for exceptional growth and optimization. 
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
      <ul className="space-y-2 text-sm">
              {deepDiveItems.map((item, index) => (
                <li className="flex items-start" key={index}>
                  <img src="/images/list-item-ind.svg" alt="" className="w-6 h-6 mr-2" />
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6 " />
      <div className="mt-auto flex flex-col md:flex-row md:justify-center items-center">
        <p className="text-3xl font-bold">
          $4,999 <span className="text-sm">per session</span>
        </p>
        <a href="https://discord.gg/deanslist" target="blank"  rel="noopener noreferrer" className="w-full"><button className="bg-[#70328F] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4 md:ml-5 w-full md:w-fit">
          Get Started
        </button>
        </a>
      </div>
    </div>
  </div>
</div>


		</div>
	);
}

export default Pricing;