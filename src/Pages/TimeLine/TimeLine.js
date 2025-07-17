import Header from "../../Components/Header.js";
import TimeLineUI  from "./TimeLineUI.js";

export default function TimeLine() {
  const steps = [
  {
    id: 1,
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you dont have the time, expertise, or desire to do.",
  },
  {
    id: 2,
    title: "Sprint planning",
    description:
      "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
  },
  {
    id: 3,
    title: "Tech architecture",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
  },
  {
    id: 4,
    title: "Standups & weekly demos",
    description:
      "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
  },
  {
    id: 5,
    title: "Code reviews",
    description:
      "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
  },
  {
    id: 6,
    title: "Iterative delivery",
    description:
      "We divide the implementation process into several checkpoints rather than a single deadline.",
  },
];
  const data = steps.map((step) => ({
    title: step.title,
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-600">
          {step.description}
        </p>
      </div>
    ),
  }));

  return (<>
    <div className="block lg:hidden relative w-full overflow-clip">
      <TimeLineUI data={data} />
    </div>
    <div className="hidden lg:flex justify-center flex-col items-center">
      <div className='text-center mb-10 flex flex-col items-center justify-center'>
        <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
        <Header text1="How development " text2="through Alcaline works" />
      </div>
      <div className="relative w-[100%] max-w-[1300px] min-w-[905px] py-16">
        <div className="flex justify-around me-10">
          {steps.map(
            (step, idx) =>
              step.id % 2 !== 0 && (
                <div
                  key={step.id}
                  className={`flex flex-col items-center w-72 px-2 relative ${
                    idx % 2 === 0 ? "mb-16" : "mt-16"
                  }`}
                >
                  <div className="bg-white shadow-md rounded-md p-4 text-center w-full">
                    <h3 className="text-sm font-bold text-pink-600">
                      #{step.id}{" "}
                      <span className="text-black">{step.title}</span>
                    </h3>
                    <p className="text-xs text-gray-600 mt-2">
                      {step.description}
                    </p>
                  </div>

                  <div className="absolute h-10 w-0.5 bg-pink-500 top-[123%] left-1/2 transform -translate-x-1/2"></div>
                </div>
              )
          )}
        </div>
        <div className="flex justify-between items-center border-t-2 border-pink-500 mx-8 relative">
          <div className="absolute -right-[3%] -top-5 text-2xl">🏆</div>
        </div>

        <div className="flex justify-around ms-10">
          {steps.map(
            (step, idx) =>
              step.id % 2 === 0 && (
                <>
                  <div
                    key={step.id}
                    className={`flex flex-col items-center w-72 px-2 relative ${
                      idx % 2 === 0 ? "mb-16" : "mt-16"
                    }`}
                  >
                    <div className="bg-white shadow-md rounded-md p-4 text-center w-full">
                      <h3 className="text-sm font-bold text-pink-600">
                        #{step.id}{" "}
                        <span className="text-black">{step.title}</span>
                      </h3>
                      <p className="text-xs text-gray-600 mt-2">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute h-10 w-0.5 bg-pink-500 bottom-[123%] left-1/2 transform -translate-x-1/2 "></div>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  </>
  )
}
