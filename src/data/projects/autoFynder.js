const acoustics = {
  name: "AutoFynder",
  short_name: "AutoFynder",
  url: "",
  description: [
    {
      header: "Motivation",
      text: "While I was working on a project to catalog and promote fun events at local restaurants, I realized there was a problem. Simply gathering all of the data for the restaurants around me would be impossible to do manually. It would take days to go to every business' website or Instagram and find what they had going on.",
    },
    {
      header: "Finally, a use case for AI",
      text: "When I got to thinking, 'hmm, is there a way for a machine to browse the web for me?' it became very clear. This was actually a problem of turning unstructured data into structured data.",
    },
    {
      header: "Technical",
      text: "This became a great opportunity to learn a few new technologies. I used the OpenAI API in an AWS Lambda (Python) to interpret Instagram data and decide if the post announced an event. AWS CloudFormation helped me create the Lambdas and DynamoDB Tables necessary for this to come together. Finally, I created a React frontend with Material UI to browse the results of these daily jobs.",
    },
  ],
  media: ["/images/autofynder.webp"],
  tech: ["Artificial Intelligence", "AWS", "Python", "React"],
  categories: ["web development", "automation"],
  start_date: "April 2024",
  end_date: "Present",
  color: "#ffcc80",
  text_color: "#000",
  uid: "autofynder",
};

export default acoustics;
