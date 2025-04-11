const synth_plant = {
  name: "Synth Plant",
  short_name: "Synth Plant",
  url: "https://instagram.com/p/BOFON2GAVJ6/",
  description: [
    {
      header: "Task",
      text: "This project, which was part of my 1st year engineering course, centered around unusual electronic instruments. In summary, the task was to create an intuitive instrument using an Arduino and less than $40 of other materials.",
    },
    {
      header: "Process",
      text: "While there were many approaches to the problem, my 4 person group was very interested in capacitive touch. We had found that the hardware needed was well within our budget and would allow us to spend more of our budget on a bigger, more creative aspect. Using an online tutorial, we were able to put together the capacitive touch hardware. We then set out to find something fun to use as the instrument. We tried cups of water, fruits, and even our own bodies. However, we eventually decided on a potted plant, since it had the right conductivity and a fun design aspect to it. The hardest part for us was interpretting the signals coming in from the hardware. By reading a single voltage value, we were eventually able to control over two octaves of tones.",
    },
    {
      header: "Outcome",
      text: "Our project was a huge success. A professional procussionist came to demo our project and loved it so much that she featured it on her Instagram account. One of my favorite parts of the project was making the electronics almost completely invisible. Besides two small probes in the stem of the plant, there were no exposed wires. We accomplished this by embedding the electronics inside a hollow plastic pot, which the actual plant rested inside of. This was a really cool project that taught me how to come up with a creative solution to an open-ended problem.",
    },
  ],
  media: ["/images/plantsynth.webp"],
  tech: ["Arduino", "Circuitry", "User Centered Design"],
  categories: ["web development", "games"],
  start_date: "March 2018",
  end_date: "April 2018",
  color: "#c5e1a5",
  text_color: "#000",
  uid: "synthplant",
};

export default synth_plant;
