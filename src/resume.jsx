
function Block({ title, items }) {
  return (
    <section>
      <div className="mb-3 text-md font-semibold uppercase tracking-[0.1em] text-slate-700">
        {title}
      </div>
      {/* <div className="flex gap-2">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div> */}
      <p>{items.join(', ')}</p>
    </section>
  )
}

function Projects({item}) {
  return (
    <section>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="space-y-4">
                    <div className="text-md font-semibold">
                        {item.name}
                    </div>

                    <div className="text-sm text-slate-700">
                        <ul className="list-disc pl-5 space-y-2 whitespace-pre-line">
                        {item.summary.map((text)=>(
                            <li key={text}>{text}</li>
                        ))}
                        </ul>
                    </div>
                    {/* <p className="text-sm">Keyword: {item.keyword.join(', ')}</p> */}
                </div>
                <div>
                    {item.image && (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="m-4 h-30 object-cover rounded-lg object-contain"
                    />
                    )}
                </div>
            </div>
        </div>
        
    </section>
  )
}

function Timelines({item}) {
    return(
        <div className="max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="text-md font-semibold">
                        {item.title}
                    </div>
                    <div className="text-sm text-slate-700">
                        {item.year}
                    </div>
                </div>

                <div className="text-sm text-slate-700">
                    {item.description}
                </div>
            </div> 
        </div>
    )
}

export default function ResumeIntroWebpage() {
    const skills = [
        "Python", "C", "C++", "Java"
    ];
    const timeline = [
        {
            year:"Mar.2026 - Present",
            title: "University of Massachusetts Amherst",
            description:
            "Exchange Program"
        },
        {
            year:"Jul.2025 - Aug.2025",
            title: "Planfit ML Engineer Intern",
            description:
            "ML Engineer Intern"
        },
        {
            year:"Mar.2021 - Present",
            title: "Yonsei University",
            description:
            "B.S. in Computer Science"
        },
    ];
    const projects = [
        {
            name: "Planfit ML Engineer Intern",
            summary:[
            "Migrated the deep learning framework from legacy libraries to Pytorch",
            "Improved performance of recommendation model by 21% through data preprocessing and structural optimization",
            ],
            keyword:["ML", "Feature Engineering", "Data Preprocessing", "Transformer"],
            image: "pf.png"
        },
        {
            name: "Ultrasonic-based Mobile Robot",
            summary: [
            "Built a keyboard-controlled robot with ultrasonic sensor–based obstacle detection",
            "Implemented a multi-threaded system on a BeagleBone for motion control and sensor data processing,\ncommunicating with Arduino-based sensor",
            "Planning to design a local vector field–based autonomous navigation system"
            ],
            keyword:["Embedded System", "SLAM", "Edge AI", "Physical AI"],
            image: "robot.jpg"
        },
        {
            name: "A Video Moderation System with User-Feedback and Multi-Criteria",
            summary: [
            "Supervised by Professor Minsuk Kang at Yonsei University",
            "Targeted growing demand but still insufficient AI moderation technology",
            "Improved accuracy,latency through Multi-Criteria, Feedback System, and Video-to-Text method",
            ],
            keyword:["HCI", "LLM", "Backend", "AI Ethics"],
            image: "video_moderation.png"
        },
        {
            name: "CPU Simulator",
            summary: [
            "Built single-cycle and 5-stage pipelined CPU Simulator",
            "Handled three types of hazards occurring in a 5-stage pipeline"
            ],
            keyword:["C++", "MIPS"],
            image: "stage5.png"
        },
        {
            name: "Implementing AI Framework",
            summary: [
                "Implemented core deep learning models (MLP, CNN) and advanced techniques (LoRA, Local Loss, Federated Learning) using PyTorch"
            ],
            keyword:["ML", "Pytorch"],
            image: "lora.png"
        },
        {
            name: "Implementing functions in xv6 OS",
            summary: [
                "Extended the xv6 by implementing system calls, EEVDF scheduler, memory mapping, multithreading, and file system components in C"
            ],
            keyword:["OS", "C"],
        },
    ];

    const interests = [
        "Physical AI",
        "Robotics",
        "HRI",
        "ML",
    ];

    return(
        <div className="min-h-screen bg-neutral-50">
            <header className="max-w-4xl px-12 pt-12 pb-10">
                <h1 className="text-3xl font-bold mb-4"> Jungsik Yoon</h1>
                <div className="text-base space-y-1">
                    <p>email@example.com</p>
                    <p>github.com/yourname</p>
                </div>
            </header>

            <section className="px-6 pb-10">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
                        About Me
                    </p>
                    <h2 className="mt-3 font-normal md:text-base">
                        Hi, I'm <span className="font-semibold">Senior Computer Science student</span> in 
                        <span className="font-semibold"> Yonsei University</span>, currently an exchange student at the 
                        <span className="font-semibold"> University of Massachusetts Amherst</span> majoring in 
                        <span className="font-semibold"> Electrical & Computer Engineering</span>. I'm interested in 
                        <span className="font-semibold"> ML, Robotics, Physical AI</span>.
                    </h2>
                </div>
            </section>

            <main className="max-w-6xl space-y-10 px-12">

                <Block title="Skills" items={skills} />
                <Block title="Interests" items={interests} />
                
                <section>
                    <div className="mb-5 text-md font-semibold uppercase tracking-[0.1em] text-slate-700">
                        Timelines
                    </div>
                    <div className="space-y-3">
                        {timeline.map((item) => (
                            <Timelines item={item} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="mb-5 text-md font-semibold uppercase tracking-[0.1em] text-slate-700">
                        Projects
                    </div>
                    <div className="space-y-3">
                        {projects.map((item) => (
                            <Projects item={item} />
                        ))}
                    </div>
                </section>
                <section></section>
                <section></section>
            </main>
        </div>
    );
}