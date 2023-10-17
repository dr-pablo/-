import {
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";

const steps = [
  {
    title: "Start @ Purdue",
    description:
      "Begin BS Economics (Krannert), Certs: Data Science, Consulting",
    date: "August 2017",
    icon: "🚂",
  },
  {
    title: "Sophomore Internship: Indiana Farm Bureau Insurance",
    description:
      "Focus mainly on market research, expand skillset specifically in python data analytics",
    date: "June 2019",
    icon: "👉",
  },
  {
    title: "Co-Found MJM Real Estate Holdings",
    description: "Form MJM Real Estate Holdings and Purchase 1st properties",
    date: "August 2019",
    icon: "🔐",
  },
  {
    title: "Join The Anvil",
    description:
      "Start-up Incubator @ Purdue University for Purdue Builders; Startup Career Fair Lead",
    date: "October 2019",
    icon: "🔋",
  },
  {
    title: "Joined Vernon Smith Behavioral Economics Lab",
    description: "Undergraduate Research Assistant: Prepared Data for Analysis",
    date: "January 2020",
    icon: "🪤",
  },
  {
    title: "Hired at Accelerated Growth Advisors",
    description:
      "Boutique consulting firm located in Chicago focused on SMB, NPO, and Startup financial and operational data analysis",
    date: "December 2020",
    icon: "🌇",
  },
  {
    title: "Transfer focus to web3 consulting",
    description:
      "Accelerated Growth is Aquired: Web3 interest becomes primary focus",
    date: "February 2022",
    icon: "🔀",
  },
  {
    title: "Formally Establish 1121 Capital, LLC",
    description:
      "Register 1121 Capital LLC and operate as an independent, private consulting firm for web3 projects",
    date: "September 2022",
    icon: "📝",
  },
  {
    title: "Exit: MJM Real Estate Holdings",
    description:
      "Sell my founder shares to fellow co-founder and migrate away from operations role",
    date: "September 2023",
    icon: "🚀",
  },
  {
    title: "Next Steps:",
    description:
      "I am looking to continue to build my business, analytics, and web development skills under senior mentorship",
    date: "Current",
    icon: "💫",
  },
];

function Journey() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box>
      <Stepper
        // // index={activeStep}
        orientation="vertical"
        size={"md"}
        // colorScheme="colors"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={step.icon}
                incomplete={step.icon}
                active={step.icon}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Journey;
