const raisin = {
  name: "Robotic Arm Individual Servo INterface",
  short_name: "Robotics",
  url: "",
  description: [
    {
      header: "Background",
      text: "Creating the RAISIN system was my final project for an embedded systems class. The class was highly focused on Zedboard FPGAs. As a final project, we were to create an interesting display of our learned skills.",
    },
    {
      header: "Features",
      text: "Using a completely hardware (FPGA) based design, this system uses 3 push buttons and 8 switches to control a 5 servo robotic arm. Each servo can be individually set to rotate at a 1Hz frequency between given angles. As an added UI feature, LEDs on the FPGA would display the servo currently being modified by the switches.",
    },
    {
      header: "Challenges",
      text: "There were many technical challenges to overcome while designing this system. Many hardware modules had to be designed from scratch using nothing but AND and OR latches. In addition, MATLAB's Simulink library has a vast array of features which I tried to leverage as much as possible.",
    },
  ],
  media: ["/images/raisin.webp"],
  tech: [
    "Circuit Design",
    "Logic Circuits",
    "Sequential and Combinational Logic",
  ],
  categories: ["web development", "games"],
  start_date: "November 2017",
  end_date: "December 2017",
  color: "#b0bec5",
  text_color: "#000",
  uid: "raisin",
};

export default raisin;
