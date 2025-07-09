import {ApplicationLink} from "@/app/components/application-link";

export default function AboutMeSection() {

    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                 aria-label="About me">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4 text-slate-500">
                    Current full stack senior software developer working at <ApplicationLink title="Highfield Qualifications" href="https://www.highfieldqualifications.com/" target="_blank" ariaLabel="Highfield Qualifications"></ApplicationLink>, Capable of
                    working to a high standard under strict deadlines to ship quality finished products.

                </p>

                <p className="mb-4 text-slate-500">
                    Always the first to rise to a challenge resulting in a vast range of knowledge covering many technologies. I've developed cross platform applications, web solutions, APIs, mobile applications, cloud hosted functions to deliver whole suites
                    of products for businesses or clients.
                </p>

                <p className="mb-4 text-slate-500">
                    Having being a developer in a <ApplicationLink title="Bespoke Software House" href="https://www.styletech.co.uk/" target="_blank" ariaLabel="StyleTech Solutions"/> I've seen a variety of settings -
                    from <ApplicationLink title="Labratory & Chemical Providers" href="https://www.scientificlabs.co.uk/" target="_blank" ariaLabel="Scientific Labratory Supplies"/> to the <ApplicationLink title="Warehouse Management Systems Of Howdens" href="https://www.howdens.com/" target="_blank" ariaLabel="Warehouse Management Systems Of Howdens"/>.
                </p>

                <p className="mb-4 text-slate-500">
                    In my current role I'm responsible for leading development teams on our <ApplicationLink title="E-Assessment Platforms" href="https://www.highfieldcore.com" target="_blank" ariaLabel="E-Assessment Platforms"/> enabling candidates around the world
                    to take their exams online with optional remote invigilation. My other responsibilities have lead the push to <ApplicationLink title="Azure" href="https://azure.microsoft.com/en-gb" target="_blank" ariaLabel="Microsoft Azure"/> pushing our systems into cloud hosted microservices backed with azure functions.
                </p>

                <p className="mb-4 text-slate-500">
                    As a pivotal member of the team i receive a lot of the R&D tasks such as making our platforms UNIX safe as we move to <ApplicationLink title="Azure" href="https://azure.microsoft.com/en-gb" target="_blank" ariaLabel="Microsoft Azure"/>, I often get
                    to learn new technologies. Having to need our own <ApplicationLink title="Mobile Application" href="https://play.google.com/store/apps/details?id=com.highfield.highfieldproctor&pcampaignid=web_share" target="_blank" ariaLabel="Highfield Invigilation mobile application"/> for use in <ApplicationLink title="Web RTC" href="https://livekit.io/" target="_blank" ariaLabel="Web RTC"/>, I was challenged at
                    creating a native <ApplicationLink title="Kotlin" href="https://kotlinlang.org/" target="_blank" ariaLabel="Kotlin"/> application with a supporting <ApplicationLink title="Rust" href="https://www.rust-lang.org/" target="_blank" ariaLabel="Rust Lang" /> library to be shared with the web team.
                </p>
            </div>
        </section>
    )
}